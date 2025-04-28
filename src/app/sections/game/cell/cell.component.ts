import { CommonModule } from "@angular/common";
import { Component, inject, Injector, model, OnInit, output } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { animate } from "animejs";
import { nanoid } from 'nanoid';
import { cz_pairwiseMap, cz_takeUntilDestroyed } from "../../../core/utils";

export interface CellState {
  val: number,
  isMine: boolean,
  isHidden: boolean,
  isFlagged: boolean
}

@Component({
  selector: 'cell',
  imports: [ CommonModule ],
  templateUrl: './cell.component.html'
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
        cz_pairwiseMap(),
        cz_takeUntilDestroyed(this._inj),
      )
      .subscribe(({oldVal, newVal}) => this._handleAnimation(oldVal, newVal))
  }

  protected onCellClick = () => this.onClick.emit();

  protected onRightClick = (e: any) =>  {
    e?.preventDefault();
    this.onFlagged.emit();
  }

  // --- Animation Hanldler --- //

  private _handleAnimation = (oldVal?: CellState, newVal?: CellState) => {
    if (oldVal?.isHidden != newVal?.isHidden && !newVal?.isFlagged)
      this._animateShowCell(newVal?.isHidden);
    
    if (oldVal?.isFlagged != newVal?.isFlagged)
      this._animateFlag(newVal?.isFlagged);
  }

  private _animateShowCell(isHidden: boolean = true) {
    let anim = {
      scale: [
        (isHidden 
          ? { to: 1, ease: 'outExpo', duration: 0 }
          : { from: 1, to: 0, ease: 'outExpo', duration: 500 })
      ],
      ease: 'inOutCirc'
    };

    animate('#front-layer-'+this.internalId, anim);
  }
  
  private _animateFlag(isIn: boolean = true) {
    let anim = {
      scale: [
        (isIn 
          ? { from: 0, to: 1, ease: 'outExpo', duration: 200 }
          : { from: 1, to: 0, ease: 'outExpo', duration: 200 }),
      ],
      ease: 'inOutCirc'
    }

    animate('#flag-'+this.internalId, anim);
  }
}