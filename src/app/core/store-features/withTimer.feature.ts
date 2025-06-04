import { patchState, signalStoreFeature, withMethods, withProps, withState } from "@ngrx/signals";
import { createTimer } from "animejs";

export interface TimerState { 
  time: number 
}

export function withTimer() {
  return signalStoreFeature(
    withState<TimerState>({ time: 0 }),
    withProps((_) => ({
      _timer: createTimer()
    })),
    withMethods((store) => ({
      pauseTimer: () => store._timer.pause(),
      resumeTimer: () => store._timer.resume(),
      restartTimer() {
        store._timer.cancel();
        store._timer = createTimer({
          onUpdate: self => this.updateTime(self.currentTime)
        });
      },
      cancelTimer: () => store._timer.cancel(),
      updateTime(newVal: number) {
        patchState(store, (_) => ({ time: newVal }));
      }
    }))
  )
};
