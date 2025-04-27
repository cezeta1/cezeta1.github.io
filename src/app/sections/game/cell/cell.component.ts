import { CommonModule } from "@angular/common";
import { Component, computed, input, model, output, signal } from "@angular/core";

export interface CellState {
  val: number,
  isMine: boolean,
  isHidden: boolean,
  isFlagged: boolean
}

@Component({
  selector: 'cell',
  imports: [ CommonModule ],
  template: `
    <div
      class="
        flex items-center justify-center
        w-10 aspect-square 
        outline-1 outline-content-border-color
        text-content-border-color
        font-bold
      "
      (click)="onCellClick()"
      (contextmenu)="onRightClick($event)"
    >
      @if (state()?.isHidden) {
        <div 
          class="
            absolute w-10 aspect-square 
            flex items-center justify-center
            bg-content-hover-background 
            rounded-sm outline-1 outline-content-border-color
            z-10
          "
        >
          @if (state()?.isFlagged) {
            <i class="absolute pi pi-flag-fill"></i>
          }
        </div>
      }

      @if (state()?.isMine ?? false) {
        <i class="absolute pi pi-circle-fill"></i>
        <i class="!text-xl pi pi-star-fill"></i>
      }
      @else if ((state()?.val ?? 0) > 0) {
        <div
          class="w-full h-full flex items-center justify-center"
          [ngClass]="
          {
            'bg-blue-900/25' : state()?.val == 1,
            'bg-amber-900/25' : state()?.val == 2,
            'bg-emerald-900/25' : state()?.val == 3,
            'bg-fuchsia-900/25' : state()?.val == 4,
            'bg-red-900/25' : (state()?.val ?? 5) >= 5
          }"
        >
          <span 
            [ngClass]="
              {
                'text-blue-400' : state()?.val == 1,
                'text-amber-400' : state()?.val == 2,
                'text-emerald-400' : state()?.val == 3,
                'text-fuchsia-400' : state()?.val == 4,
                'text-red-400' : (state()?.val ?? 5) >= 5
              }"
          >
            {{ state()?.val }}
          </span>
        </div>
      }
    </div>
  `
})
export class CellComponent {

  public state = model<CellState>();
  public onClick = output();
  public onFlagged = output();

  protected onCellClick = () => this.onClick.emit();
  
  protected onRightClick = (e: any) =>  {
    e?.preventDefault();
    this.onFlagged.emit();
  }
}