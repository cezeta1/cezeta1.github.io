import { DestroyRef, Injector } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as _ from 'lodash';
import { MonoTypeOperatorFunction, pipe } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

export const cz_debounceUntilChanged = <T>(
  milliseconds: number = 0, 
  eqFn: <T>(p: T, c: T) => boolean = (p, c)=> _.isEqual(p, c)
): MonoTypeOperatorFunction<T> => 
  pipe(
    debounceTime(milliseconds),
    distinctUntilChanged(eqFn)
  );  

export const cz_takeUntilDestroyed = <T>(inj : Injector): MonoTypeOperatorFunction<T> => {
  const _destroyRef = inj.get(DestroyRef);
  if (!_destroyRef) 
    throw new Error("cz_takeUntilDestroyed couldn't find a valid DestroyRef. Are you using the correct Injector?");
  return takeUntilDestroyed(_destroyRef);
}