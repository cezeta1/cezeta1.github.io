import {
  patchState,
  signalStore,
  withMethods,
  withState
} from '@ngrx/signals';
import { withStateChange } from '../../../core/store-features/withStateChange.feature';

export interface CellState {
  val: number,
  isMine: boolean,
  isHidden: boolean,
  isFlagged: boolean
}

export const initialState: CellState = {    
  val: 0,
  isMine: false,
  isHidden: true,
  isFlagged: false
};

export const CellStore = signalStore(
  withState({ ...initialState }),
  withStateChange(initialState),
  withMethods((store) => ({
    reset: () => patchState(store, (_) => ({ ...initialState })),
    setState: (newState: CellState) => patchState(store, (_) => ({ ...newState })),
    
    // --- val --- //

    incrementVal: () => patchState(store, (state) => ({ ...state, val: state.val + 1 })),
    setVal: (newVal?: number) => {
      newVal ??= store.val();
  
      if (store.isMine())
        newVal = 0;
  
      patchState(store, (state) => ({ ...state, val: newVal }));
    },

    // --- isMine --- //
    
    toggleMine: (newVal?: boolean) => {
      newVal ??= !store.isMine();

      patchState(store, (state) => ({ 
        ...state, 
        val: 0,
        isFlagged: false,
        isHidden: newVal, // if mine, hide it
        isMine: newVal
      }));
    },

    // --- isHidden --- //
    
    toggleHidden: (newVal?: boolean) => {
      newVal ??= !store.isHidden();
    
      if (!newVal && store.isFlagged())
        return;
      
      patchState(store, (state) => ({ ...state, isHidden: newVal }));
    },

    // --- isFlagged --- //
    
    toggleFlag: (newVal?: boolean) => {
      newVal ??= !store.isFlagged();

      if (!store.isHidden())
        return;
      
      patchState(store, (state) => ({ ...state, isFlagged: newVal }));
    },

    // --- Utils --- //
    
    solveSelf(): void {
      if (store.isMine())
        this.toggleFlag(true);
      else {
        this.toggleFlag(false);
        this.toggleHidden(false);
      }
    }
  }))
);