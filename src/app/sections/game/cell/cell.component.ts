import { CommonModule } from "@angular/common";
import { Component, computed, inject, Injector, model, OnInit, output, signal, untracked } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { cz_takeUntilDestroyed } from "../../../core/utils";
import { distinctUntilChanged, map, pairwise } from "rxjs";
import { compact, isEqual } from "lodash-es";
import { animate } from "animejs";
import { nanoid } from 'nanoid'

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
    
      <!-- Front Layer -->
      <!-- @if (state()?.isHidden) { -->
        <div 
          [id]="'front-layer-'+internalId"
          class="
            absolute w-10 aspect-square 
            flex items-center justify-center
            bg-content-hover-background 
            rounded-sm outline-1 outline-content-border-color
            z-10
          "
        >
          @if (state()?.isFlagged) {
            <i class="pi pi-flag-fill"></i>
          }
        </div>
      <!-- }  -->

      <!-- Back Layer -->
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
export class CellComponent implements OnInit {
  protected internalId = nanoid();
  
  private _inj = inject(Injector);

  public state = model<CellState>();
  public onClick = output();
  public onFlagged = output();

  ngOnInit(): void {
    toObservable(this.state, { injector: this._inj })
      .pipe(
        distinctUntilChanged((p, c)=> isEqual(p, c)),
        pairwise(),
        map(([oldVal, newVal]) => ({newVal, oldVal})),
        cz_takeUntilDestroyed(this._inj),
      )
      .subscribe(({oldVal, newVal}) => {
        if (oldVal?.isHidden != newVal?.isHidden)
          this._animateShowCell();
        
        if (oldVal?.isFlagged != newVal?.isFlagged)
          this._animateFlag();
      })
  }

  protected onCellClick = () => this.onClick.emit();

  protected onRightClick = (e: any) =>  {
    e?.preventDefault();
    this.onFlagged.emit();
  }

  private _animateShowCell() {
    animate('#front-layer-'+this.internalId, {
      scale: [
        { to: 0, ease: 'outExpo', duration: 500 }
      ],
      ease: 'inOutCirc'
    });
  }
  
  private _animateFlag() {

  }
}