import { CommonModule } from "@angular/common";
import { Component, computed, inject, signal, viewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { Message } from "primeng/message";
import { BlockableDivComponent } from "../../core/components/ui-components/blockable-div/blockable-div.component";
import { CZUIBlockerComponent } from "../../core/components/ui-components/cz-ui-blocker/cz-ui-blocker.component";
import { DurationFormatPipe } from "../../core/duration-format.pipe";
import { AlertsService } from "../../core/services/alerts/alerts.service";
import { SweeperGridComponent } from "./grid/sweeper-grid.component";

@Component({
  selector: 'game',
  imports: [
    CommonModule,
    FormsModule,
    DurationFormatPipe,
    Message,
    Button,
    SweeperGridComponent,
    CZUIBlockerComponent,
    BlockableDivComponent
],
  templateUrl: './game.component.html',
})
export class GameComponent {
 
  protected Math = Math;
  private _alertsService = inject(AlertsService);

  private _gridRef = viewChild(SweeperGridComponent);
  protected gameState = computed(() => this._gridRef()?.state);

  protected isVictory = signal(false);

  protected xn = 15;
  protected yn = 15;
  protected mines = 8;
  
  // --- Events --- //

  protected onWin() {
    this.isVictory.set(true);
    // this._alertsService.showSuccess("You won!");
  }

  protected onGameOver() {
    // this._alertsService.showError("Game Over");
  }

  protected onAutoSolve() {
    this._gridRef()?.autoSolve();
  }

  protected onReset() {
    this._gridRef()?.reset();
  }

  // --- Private Methods --- //

}
