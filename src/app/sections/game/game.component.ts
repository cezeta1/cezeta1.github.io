import { CommonModule } from "@angular/common";
import { AfterViewChecked, AfterViewInit, Component, computed, inject, Injector, signal, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { createTimeline, stagger} from "animejs";
import { chunk, delay, forEach, isEqual, map, random, set, uniq } from "lodash-es";
import { Button } from "primeng/button";
import { InputNumberModule } from 'primeng/inputnumber';
import { AlertsService } from "../../core/services/alerts/alerts.service";
import { CellComponent, CellState } from "./cell/cell.component";

@Component({
  selector: 'game',
  imports: [ 
    CommonModule, 
    FormsModule,
    CellComponent,
    Button, 
    InputNumberModule 
  ],
  templateUrl: './game.component.html',
})
export class GameComponent implements AfterViewChecked, AfterViewInit {
 
  private _alertsService = inject(AlertsService);

  private __cR = viewChildren(CellComponent);
  private _cellRefs = computed(() => chunk(this.__cR(), this.yn));
  private _cellStates = computed(() => map(this._cellRefs(), (r) => map(r, c => c.state)));
  private _cellLenth = computed(() => this.xn * this.yn);

  protected xn = 15;
  protected yn = 15;
  protected mines = 20;
  
  protected isBusy = signal(false);
  protected gameFinished = signal(false);
  private _won = signal(false);
  
  ngAfterViewInit(): void {
    this._initCells();    
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

    if (!cell || cell.isFlagged)
      return;

    this._onLeftClick(i, j);
  }

  private _onLeftClick(i: number, j: number) {
    let c = this._cellRefs()[i][j];
    c.toggleHidden(false);

    if (c.state.val == 0 && !c.state.isMine && !c.state.isFlagged)
      this._expandNeighbors(i, j);
  }

  private _expandNeighbors(i: number, j: number, staggerFn?: Function) {
    staggerFn ??= stagger(50, {
      grid: [this.yn, this.xn],
      from: i*this.xn + j
    });
    
    let visitedCells: { x: number, y: number }[] = [
      { x: i, y: j }
    ];
    
    // Expand Neighbors

    const _loop = (ui: number, uj: number) => {
      let coords = { x: ui, y: uj };
        
      if (visitedCells.some(c => isEqual(c, coords)))
        return;

      visitedCells.push(coords);

      let target = this._cellRefs()[ui][uj];

      let idx = this._getFlatIndex(ui, uj)
      let delay = staggerFn(target, idx, this._cellLenth()) as number;
      
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
    
    this._cellRefs()[i][j].toggleFlag();
  }

  protected onReset() {
    this._initCells();
  }

  protected autoSolve() {

    this.isBusy.set(true);

    let tl = createTimeline();

    let t = 0;
    this._forEachCell((c, i, j) => {
      tl = tl.call(() => this._solveCell(c, i, j), t);
      t += 5;
    });

    t += 300;
    tl = tl.call(() => { 
      this.isBusy.set(false);
      this._checkGameState();
    }, t);
  }

  // --- Private Methods --- //

  private _initCells() {

    this.gameFinished.set(false);
    this._won.set(false);

    this._forEachCell((_, i, j) => this._cellRefs()[i][j].reset());

    // set up Mines
    
    let m = this.mines > (this.xn * this.yn)
      ? this.xn * this.yn
      : this.mines;

    forEach([].constructor(m), (_) => {

      let i = 0;
      let j = 0;
      let repeat = false;

      do {
        repeat = false;

        i = random(this.xn - 1);
        j = random(this.yn - 1);
        
        if (this._cellStates()[i][j].isMine)
          repeat = true;

      } while (repeat);
      
      this._cellRefs()[i][j].toggleMine(true);
      
      // set proximity numbers
      
      this._forEachAround(i, j, 
        (_, ui, uj) => 
          this._cellRefs()[ui][uj].setVal(
            this._cellStates()[ui][uj].val + 1
          ));
    });
  }

  private _checkGameState() {

    if (this.gameFinished())
      return;

    let isGameOver = false;
    let mineMissing = false;

    this._forEachCell((c) => {
        if (c.isMine) {

          // Game Over
          if (!c.isHidden) {
            isGameOver = true;
            return false;
          }

          // Game continues
          if (c.isMine && !c.isFlagged) {
            mineMissing = true;
            return false;
          }
        }
        return;
      });

    if (isGameOver)
      this._onGameOver();

    if (!mineMissing)
      this._onWin();
  }

  private _onWin() {
    this.gameFinished.set(true);
    this._won.set(true);

    this._forEachCell((c, i, j) => {
      if (c.isMine)
        this._cellRefs()[i][j].toggleFlag(true);
      else
        this._cellRefs()[i][j].toggleHidden(false);
    });
    
    this._alertsService.showSuccess("Winner :)");
  }

  private _onGameOver() {
    this.gameFinished.set(true);
    this._alertsService.showError("Game Over :(");
  }

  private _solveCell(c: CellState, i: number, j: number) {
    if (c.isMine)
      this._cellRefs()[i][j].toggleFlag(true);
    else {
      this._cellRefs()[i][j].toggleFlag(false);
      this._cellRefs()[i][j].toggleHidden(false);
    }
  }

  // --- Utils --- //

  private _getFlatIndex = (i: number, j: number) => i*this.xn + j;

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
    let aroundIs = uniq(map(
      [i-1, i, i+1], 
      (ix) => ix < 0 
        ? 0 
        : ix >= this.xn 
          ? this.xn-1 
          : ix)
    );
    
    let aroundJs = uniq(map(
      [j-1, j, j+1], 
      (jx) => jx < 0 
        ? 0 
        : jx >= this.yn 
          ? this.yn-1 
          : jx)
    );
    
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
