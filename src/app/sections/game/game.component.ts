import { CommonModule } from "@angular/common";
import { Component, viewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { Card } from "primeng/card";
import { Message } from "primeng/message";
import { TagModule } from 'primeng/tag';
import { BlockableDivComponent } from "../../core/components/ui-components/blockable-div/blockable-div.component";
import { CZUIBlockerComponent } from "../../core/components/ui-components/cz-ui-blocker/cz-ui-blocker.component";
import { DurationFormatPipe } from "../../core/duration-format.pipe";
import { CDigitalDisplayComponent } from "./digital-display/digital-display.component";
import { SweeperGridComponent } from "./grid/sweeper-grid.component";

@Component({
  selector: 'game',
  imports: [
    CommonModule,
    FormsModule,
    DurationFormatPipe,
    Message,
    Button,
    Card,
    TagModule,
    SweeperGridComponent,
    CZUIBlockerComponent,
    BlockableDivComponent,
    CDigitalDisplayComponent
],
  templateUrl: './game.component.html',
})
export class GameComponent {
 
  protected Math = Math;

  private _gridRef = viewChild(SweeperGridComponent);
  protected gameState() { return this._gridRef()?.state(); };

  protected xn = 12;
  protected yn = 12;
  protected mines = 5;
  
  // --- Events --- //

  protected onWin() {
  
  }

  protected onGameOver() {

  }

  protected onAutoSolve() {
    this._gridRef()?.autoSolve();
  }

  protected onReset() {
    this._gridRef()?.reset();
  }
}
