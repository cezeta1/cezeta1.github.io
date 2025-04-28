import { CommonModule } from "@angular/common";
import { AfterViewChecked, Component, inject, Injector, OnInit, signal } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { FormsModule } from "@angular/forms";
import { createTimeline } from "animejs";
import { forEach, map, random, uniq } from "lodash-es";
import { Button } from "primeng/button";
import { InputNumberModule } from 'primeng/inputnumber';
import { AlertsService } from "../../core/services/alerts/alerts.service";
import { cz_takeUntilDestroyed } from "../../core/utils";
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
export class GameComponent implements OnInit, AfterViewChecked {

  private _inj = inject(Injector);
  private _alertsService = inject(AlertsService);

  protected xn = 15;
  protected yn = 15;
  protected mines = 5;
  
  protected isBusy = signal(false);
  protected gameFinished = signal(false);
  private _won = signal(false);

  private _defaultCell: CellState = {
    val: 0,
    isMine: false,
    isHidden: true,
    isFlagged: false
  };

  protected cells: CellState[][] = [];

  ngOnInit(): void {
    this._initCells();

    toObservable(this.gameFinished, {injector: this._inj })
      .pipe(cz_takeUntilDestroyed(this._inj))
      .subscribe(() => this._animateGameOver());
  }

  ngAfterViewChecked(): void {
    if (!this.isBusy())
      this._checkGameState();
  }

  // --- Events --- // 

  protected onCellClick (i: number, j: number) {
    if (this.gameFinished())
      return;

    let cell = this.cells[i][j];

    if (!cell || cell.isFlagged)
      return;
    
    this.cells[i][j] = {
      ...cell,
      isHidden: false
    };
    
    // Clean up neighbors

    if (cell.val == 0) {
      this._forEachAround(i, j,
        (c, ui, uj) => { 
          if (c.isHidden && !c.isMine)          
            this.onCellClick(ui, uj);
        });
    }
  }

  protected onFlagCell (i: number, j: number) {
    if (this.gameFinished())
      return;

    let cell = this.cells[i][j];

    if (!cell.isHidden)
      return;

    this.cells[i][j] = {
      ...cell,
      isFlagged: !cell.isFlagged
    }
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

    this.cells = []
      .constructor(this.xn)
      .fill(null)
      .map(() => []
        .constructor(this.yn)
        .fill(null)
        .map(() => ({... this._defaultCell}))
      );

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
        
        if (this.cells[i][j].isMine)
          repeat = true;

      } while (repeat);
      
      this.cells[i][j].isMine = true;
      
      // set proximity numbers
      
      this._forEachAround(i, j, 
        (_, ui, uj) => this.cells[ui][uj].val += 1);
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
        this.cells[i][j] = {
          ...this.cells[i][j],
          isFlagged: true
        };
      else
        this.cells[i][j] = {
          ...this.cells[i][j],
          isHidden: false
        };
    });
    
    this._alertsService.showSuccess("Winner :)");
  }

  private _onGameOver() {
    this.gameFinished.set(true);
    this._alertsService.showError("Game Over :(");
  }

  private _solveCell(c: CellState, i: number, j: number) {
    if (c.isMine)
      this.cells[i][j] = {
        ...this.cells[i][j],
        isFlagged: true
      };
    else
      this.cells[i][j] = {
        ...this.cells[i][j],
        isFlagged: false,
        isHidden: false
      };
  }

  private _animateGameOver() {

  }

  // --- Utils --- //

  private _forEachCell = (fn: (c: CellState, i: number, j: number) => void | false) => 
    forEach(this.cells, (row, i) => {
      forEach(row, (c, j) => fn(c,i,j))
    });

  private _forEachAround = (i: number, j: number, fn: (c: CellState, i: number, j: number) => void) => {
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
        if (!(ui == i && uj == j))
          fn(this.cells[ui][uj], ui, uj);
      })
    );
  }

}
