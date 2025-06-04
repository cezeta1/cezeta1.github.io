import { effect } from '@angular/core';
import {
  getState,
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState
} from '@ngrx/signals';
import { BehaviorSubject } from 'rxjs';
import { withStateChange } from '../../../core/store-features/withStateChange.feature';
import { withTimer } from '../../../core/store-features/withTimer.feature';

export interface SweeperState {
  time: number,
  score: number

  leftClicks: number,
  rightClicks: number,
  result: 'win' | 'lose' | 'inProgress'
  
  threeBV: {
    value: number,
    score: number
  }
}

export const initialState: SweeperState = {    
  time: 0,
  score: 0,
  leftClicks: 0,
  rightClicks: 0,
  result: 'inProgress',
  threeBV: {
    value: 0,
    score: 0
  }
};

export const SweeperStore = signalStore(
  withState({  ...initialState }),
  withStateChange(initialState),
  withTimer(),
  withProps((_) => ({
    state$: new BehaviorSubject<SweeperState>({ ...initialState })
  })),
  withHooks({
    onInit(store) {
      effect(() => store.state$.next(getState(store)));
    }
  }),
  withMethods((store) => ({
    reset: () => patchState(store, (_) => ({ ...initialState })),
    setState: (newState: Partial<SweeperState>) => patchState(store, (_) => ({ ...newState }))
  }))
);