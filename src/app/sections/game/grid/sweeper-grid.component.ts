import { CommonModule } from "@angular/common";
import { AfterViewChecked, AfterViewInit, Component, computed, input, output, signal, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { createTimeline, createTimer, stagger, Timer } from "animejs";
import { chunk, forEach, map, random, uniq } from "lodash-es";
import { CellComponent, CellState } from "../cell/cell.component";

export interface SweeperState {
  timer: number,
  score: number

  leftClicks: number,
  rightClicks: number,
  result: 'win' | 'lose' | 'inProgress'
}

@Component({
  selector: 'sweeper-grid',
  imports: [ 
    CommonModule, 
    FormsModule,
    CellComponent
  ],
  templateUrl: './sweeper-grid.component.html',
})
export class SweeperGridComponent implements AfterViewChecked, AfterViewInit {

  private get _defaultState(): SweeperState {
    return {    
      timer: 0,
      score: 0,
      leftClicks: 0,
      rightClicks: 0,
      result: 'inProgress'
    };
  }

  // --- Interface --- //

  public xn = input<number>(25);
  public yn = input<number>(25);
  public mines = input<number>(15);
  
  public onWin = output();
  public onGameOver = output();
  
  public get state() { return this._state(); };
  public reset = () => this._onReset();
  public autoSolve = () => this._autoSolve();
  
  // ----------------- //
  
  private __cR = viewChildren(CellComponent);
  private _cellRefs = computed(() => chunk(this.__cR(), this.yn()));
  private _cellStates = computed(() => map(this._cellRefs(), (r) => map(r, c => c.state)));
  private _cellLength = computed(() => this.xn() * this.yn());
  private _timer!: Timer;
  
  private _state = signal<SweeperState>(this._defaultState);

  protected isBusy = signal(false);
  protected gameFinished = signal(false);
  
  private _won = signal(false);
  
  ngAfterViewInit(): void {
    // TODO: check this
    this._initGame();
  }

  ngAfterViewChecked(): void {
    if (!this.isBusy()) 
      this._checkGameState();
  }

  // --- Events --- // 

  protected onCellClick (i: number, j: number) {
    if (this.gameFinished())
      return;

    let cell = this._cellStates()[i][j];

    if (!cell || !cell.isHidden)
      return;

    this._state.set({
      ...this._state(),
      leftClicks: this._state().leftClicks + 1
    });

    this._onLeftClick(i, j);
  }

  private _onLeftClick(i: number, j: number) {
    let c = this._cellRefs()[i][j];
    c.toggleHidden(false);

    if (c.state.val == 0 && !c.state.isMine)
      this._floodFill(i, j);
  }

  private _floodFill(i: number, j: number, staggerFn?: Function) {

    staggerFn ??= stagger(50, {
      grid: [this.yn(), this.xn()],
      from: this._getFlatIndex(i, j)
    });
    
    let visitedCells: boolean[][] = 
      [].constructor(this.xn())
        .fill(null)
        .map((_: null) => 
          [].constructor(this.yn())
            .fill(false)
        );
    
    visitedCells[i][j] = true;
    
    // Expand Neighbors

    const _loop = (ui: number, uj: number) => {

      if (visitedCells[ui][uj])
        return;

      visitedCells[ui][uj] = true;

      let target = this._cellRefs()[ui][uj];

      let idx = this._getFlatIndex(ui, uj)
      let delay = staggerFn(target, idx, this._cellLength()) as number;
    
      setTimeout(() => target.toggleHidden(false), delay);
      
      if (target.state.val != 0)
        return;

      this._forEachAround(ui, uj, (_, xi, xj) => _loop(xi, xj));
    };

    this._forEachAround(i, j, (_, ui, uj) => _loop(ui, uj));
  }

  protected onFlagCell (i: number, j: number) {
    if (this.gameFinished())
      return;

    let cell = this._cellStates()[i][j];

    if (!cell.isHidden)
      return;
    
    this._state.set({
      ...this._state(),
      rightClicks: this._state().rightClicks + 1
    });

    this._cellRefs()[i][j].toggleFlag();
  }

  // --- Private Methods --- //

  private _initGame() {

    this.gameFinished.set(false);
    this._won.set(false);
    this._state.set(this._defaultState);

    this._timer?.cancel();
    this._timer = createTimer({
      onUpdate: self => {
        this.state.timer = self.currentTime;
      }
    });

    this._forEachCell((_, i, j) => this._cellRefs()[i][j].reset());

    // set up Mines
    
    let m = this.mines() > this._cellLength()
      ? this._cellLength()
      : this.mines();

    forEach([].constructor(m), (_) => {

      let i = 0;
      let j = 0;
      let repeat = false;

      do {
        repeat = false;

        i = random(this.xn() - 1);
        j = random(this.yn() - 1);
        
        if (this._cellStates()[i][j].isMine)
          repeat = true;

      } while (repeat);
      
      this._cellRefs()[i][j]
        .toggleMine(true);
      
      // set proximity numbers
      
      this._forEachAround(i, j, 
        (_, ui, uj) => 
          this._cellRefs()[ui][uj].setVal(
            this._cellStates()[ui][uj].val + 1
          ));
    });
  }

  private _onReset = () => {
    if (!this.isBusy())
      this._initGame();
  }

  private _autoSolve() {
    this.isBusy.set(true);

    let tl = createTimeline();

    let t = 0;
    this._forEachCell((c, i, j) => {
      tl = tl.call(() => this._solveCell(c, i, j), t);
      t += 5;
    });

    tl = tl.call(() => this.isBusy.set(false), t + 300);    
  }

  private _solveCell(c: CellState, i: number, j: number) {
    if (c.isMine)
      this._cellRefs()[i][j].toggleFlag(true);
    else {
      this._cellRefs()[i][j].toggleFlag(false);
      this._cellRefs()[i][j].toggleHidden(false);
    }
  }

  private _checkGameState() {

    if (this.gameFinished())
      return;

    let notMineHidden = false;
    let allMinesFlagged = true;
    let isGameOver = false;

    this._forEachCell(c => {
 
      // All not-mine cells shown
      if (!c.isMine && c.isHidden) {
        notMineHidden = true;
        return false;
      }

      if (c.isMine) {

        // Mine shown (Boom!)
        if (!c.isHidden) {
          isGameOver = true;
          return false;
        }

        // All mines flagged
        if (!c.isFlagged) {
          allMinesFlagged = false;
          return false;
        }
      }

      return;
    });

    if (isGameOver) {
      this._onGameOver();
      return;
    }

    if (!notMineHidden || allMinesFlagged) {
      this._onWin();
      return;
    }
  }

  private _onWin() {
    this.gameFinished.set(true);
    this._won.set(true);
    
    this._autoSolve();

    this._timer?.cancel();
    this._state.set({
      ...this._state(),
      result: 'win'
    });
    
    this.onWin.emit();
  }

  private _onGameOver() {
    this.gameFinished.set(true);
    
    this._timer?.cancel();
    this._state.set({
      ...this._state(),
      result: 'lose'
    });

    this.onGameOver.emit();
  }

  // --- Utils --- //

  private _getFlatIndex = (i: number, j: number) => i * this.xn() + j;

  private _forEachCell = (
    fn: (c: CellState, i: number, j: number) => void | false,
    cond?: (c: CellState, i: number, j: number) => boolean
  ) => 
    forEach(this._cellStates(), (row, i) => {
      forEach(row, (c, j) =>  {
        if (!!cond && !cond(c,i,j))
          return;

        fn(c,i,j);
      })
    });

  private _forEachAround = (
    i: number,
    j: number, 
    fn: (c: CellState, i: number, j: number) => void,
    cond?: (c: CellState, i: number, j: number) => boolean,
  ) => {

    const clip = (x: number, max: number ) => 
      x < 0 ? 0 : (x >= max ? max - 1 : x); 

    const getAroundIds = (o: number, maxN: number) => uniq(map(
      [o-1, o, o+1], 
      (i) => clip(i, maxN))
    );

    let aroundIs = getAroundIds(i, this.xn());
    let aroundJs = getAroundIds(j, this.yn());
    
    forEach(aroundIs, (ui) => 
      forEach(aroundJs, (uj) => {
        let c = this._cellStates()[ui][uj];

        if (!!cond && !cond(c, ui, uj))
          return;
        
        if (!(ui == i && uj == j))
          fn(c, ui, uj);
      })
    );
  }
}
