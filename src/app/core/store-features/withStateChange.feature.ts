import { effect, inject, Injector } from "@angular/core";
import { getState, signalStoreFeature, withHooks, withProps } from "@ngrx/signals";
import { BehaviorSubject } from "rxjs";

export function withStateChange<T>(defaultVal: T) {
  return signalStoreFeature(
    withProps((_) => ({
      state$: new BehaviorSubject<T>({ ...defaultVal }),
    })),
    withHooks({
      onInit(store, _inj = inject(Injector)) {
        effect(() => store.state$.next(getState(store) as T));
      }
    })
  )
};