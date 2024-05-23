import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/Observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as toppingsActions from '../actions/toppings.action';
import * as fromServices from '../../services';

@Injectable()
export class ToppingsEffect {
    constructor(
        private actions$: Actions,
        private toppingsService: fromServices.ToppingsService
    ) {}

    @Effect()
    loadToppings$ = this.actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
        switchMap(() => {
            return this.toppingsService.getToppings().pipe(
                map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
                catchError((err) => of(new toppingsActions.LoadToppingsFail(err))),
            )
        })
    )
}