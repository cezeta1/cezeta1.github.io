import { CommonModule } from "@angular/common";
import { Component, inject, Injector, OnInit, output, signal } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { animate, AnimationParams } from "animejs";
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
  
  private _defaultState: CellState = {    
    val: 0,
    isMine: false,
    isHidden: true,
    isFlagged: false
  };
  protected _state = signal<CellState>({ ...this._defaultState });
  protected _busy = signal<boolean>(false);

  ngOnInit(): void {
    toObservable(this._state, { injector: this._inj })
      .pipe(
        cz_pairwiseMap({ ...this._defaultState }),
        cz_takeUntilDestroyed(this._inj),
      )
      .subscribe(({oldVal, newVal}) => {
        if (this._busy())
          return;

        this._handleAnimation(oldVal, newVal);
      })
  }

  // --- Events --- //

  protected onCellClick = () => 
    this.onClick.emit();

  protected onCellRightClick = (e: any) =>  {
    e?.preventDefault();
    this.onRightClick.emit();
  }

  // --- Interface --- //

  public onClick = output();
  public onRightClick = output();

  public get state() { 
    return this._state(); 
  }

  public stateObservable = () =>
    toObservable(this._state, { injector: this._inj });

  public setState = (newState: CellState) =>
    this._state.set({... newState });

  public setVal(newVal?: number) {
    newVal ??= this._state().val; 
    this._state.set({
      ...this._state(),
      val: newVal
    });
  }

  public reset() {
    this.setState(this._defaultState);
  }

  public toggleHidden(newVal?: boolean) {
    newVal ??= !this._state().isHidden;
    this._state.set({
      ...this._state(),
      isHidden: newVal
    });
  }

  public toggleFlag(newVal?: boolean) {
    newVal ??= !this._state().isFlagged;
    this._state.set({
      ...this._state(),
      isFlagged: newVal
    });
  }
  
  public toggleMine(newVal?: boolean) {
    newVal ??= !this._state().isMine; 
    this._state.set({
      ...this._state(),
      isMine: newVal
    });
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

  private _animate(id:string, conf: AnimationParams) {
    this._busy.set(true);
    animate(id, { 
      ...conf,
      onComplete: self => {
        this._busy.set(false);
        conf.onComplete?.(self);
      } 
    });
  }
}