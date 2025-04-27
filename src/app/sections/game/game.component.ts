import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import { CellComponent, CellState } from "./cell/cell.component";
import { forEach, map, random, uniq } from "lodash-es";
import { AlertsService } from "../../core/services/alerts/alerts.service";
import { Button } from "primeng/button";

@Component({
  selector: 'game',
  imports: [CommonModule, CellComponent, Button],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {

  private _alertsService = inject(AlertsService);

  protected xn = 15;
  protected yn = 30;
  protected mines = 80;
  protected isGameOver = signal(false);
  
  private _defaultCell: CellState = {
    val: 0,
    isMine: false,
    isHidden: true,
    isFlagged: false
  };

  protected cells: CellState[][] = [];

  ngOnInit(): void {
    this._initCells();
  }

  // --- Events --- // 

  protected onCellClick (i: number, j: number) {

    let cell = this.cells[i][j];

    if (!cell || cell.isFlagged)
      return;
    
    this.cells[i][j].isHidden = false;

    // Clean up neighbors
    if (cell.val <= 0) {
      this._forEachAround(i, j,
        (c, ui, uj) => {
          if (c.val == 0 && c.isHidden)
            this.onCellClick(ui, uj);
        });
    }

    // Game over
    if (cell.isMine) {
      this._onGameOver();
      return;
    }
    
    // Winner?

    let notMineMissing = false;
    this._forEachCell((c) => {
        if (!c.isMine && c.isHidden) {
          notMineMissing = true;
          return false;
        }
        return;
      });

    if (!notMineMissing)
      this._onWinner();
  }

  protected onFlagCell (i: number, j: number) {
    let cell = this.cells[i][j];

    if (!cell.isHidden)
      return;

    cell.isFlagged = !cell.isFlagged; 
  }

  protected onReset() {
    this.isGameOver.set(false);
    this._initCells();
  }

  // --- Private Methods --- //

  private _initCells() {

    this.cells = []
      .constructor(this.xn)
      .fill(null)
      .map(() => []
        .constructor(this.yn)
        .fill(null)
        .map(() => ({... this._defaultCell}))
      );

    // set up Mines
    
    forEach([].constructor(this.mines), (_) => {

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

  private _onWinner() {

    this.isGameOver.set(false);
    
    this._forEachCell((c) => {
      if (c.isMine)
        c.isFlagged = true;
    });

    this._alertsService.showSuccess("Winner :)");
  }

  private _onGameOver() {
    this.isGameOver.set(true);
    this._alertsService.showError("Game Over :(");
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
