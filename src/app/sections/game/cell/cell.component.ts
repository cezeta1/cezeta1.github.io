import { CommonModule } from "@angular/common";
import { Component, computed, inject, Injector, OnInit, output, signal } from "@angular/core";
import { getState, watchState } from "@ngrx/signals";
import { animate, AnimationParams } from "animejs";
import { nanoid } from 'nanoid';
import { cz_pairwiseMap, cz_takeUntilDestroyed } from "../../../core/utils";
import { CellState, CellStore, initialState } from "./cell.store";

@Component({
  selector: 'cell',
  imports: [ CommonModule ],
  providers: [ CellStore ],
  templateUrl: './cell.component.html'
})
export class CellComponent implements OnInit {
  readonly #inj = inject(Injector);
  protected internalId = nanoid();

  protected cellStore = inject(CellStore);
  
  protected _isBusy = signal<boolean>(false);

  ngOnInit(): void {
    this.cellStore
      .state$
      .pipe(
        cz_pairwiseMap({ ...initialState }),
        cz_takeUntilDestroyed(this.#inj),
      )
      .subscribe(({ oldVal, newVal }) => {
        if (this._isBusy())
          return;

        this._handleAnimation(oldVal, newVal);
      });
  }

  // --- Events --- //

  protected onCellClick = () => this.onClick.emit();

  protected onCellRightClick = (e: any) =>  {
    e?.preventDefault();
    this.onRightClick.emit();
  }

  // --- Interface --- //

  public onClick = output();
  public onRightClick = output();

  public state = computed(() => getState(this.cellStore));
  public onStateChange = (fn: (state: CellState) => void) => watchState(this.cellStore, fn);

  public reset = this.cellStore.reset;
  public setVal = this.cellStore.setVal;
  public incrementVal = this.cellStore.incrementVal;
  public toggleHidden = this.cellStore.toggleHidden;
  public toggleFlag = this.cellStore.toggleFlag;
  public toggleMine = this.cellStore.toggleMine;
  public solveSelf = this.cellStore.solveSelf;

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

    this._animate('#front-layer-'+this.internalId, anim);
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

    this._animate('#flag-'+this.internalId, anim);
  }

  private _animate(id: string, conf: AnimationParams) {
    this._isBusy.set(true);
    animate(id, { 
      ...conf,
      onComplete: self => {
        this._isBusy.set(false);
        conf.onComplete?.(self);
      } 
    });
  }
}