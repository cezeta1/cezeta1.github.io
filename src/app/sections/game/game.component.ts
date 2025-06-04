import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, computed, HostListener, inject, viewChild } from "@angular/core";
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
import { Router } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'game',
  imports: [
    CommonModule,
    FormsModule,
    DurationFormatPipe,
    TranslatePipe,
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

  readonly _router = inject(Router);

  protected Math = Math;

  protected changeDetectorRef = inject(ChangeDetectorRef);
  
  @HostListener('document:visibilitychange', ['$event'])
  onVisibilityChange(_t: any): void {
    if (!document.hidden) {
      this.changeDetectorRef.reattach();
      this.changeDetectorRef.detectChanges();
    }
  }

  private _gridRef = viewChild(SweeperGridComponent);
  protected gameState = computed(() => this._gridRef()?.state());

  protected xn = 12;
  protected yn = 12;
  protected mines = 20;
  
  // --- Events --- //

  protected onAutoSolve() {
    this._gridRef()?.autoSolve();
  }

  protected onReset() {
    this._gridRef()?.reset();
  }

  protected onBackHome() {
    this._router.navigate(['/']);
  }
}
