import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, filter, take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';

import * as fromStore from '../store';

import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzaExistsGuard implements CanActivate {

    constructor(private readonly store: Store<fromStore.ProductsState>) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => {
                const id = parseInt(route.params.pizzaId, 10);
                return this.hasPizza(id);
            })
        )
    }

    hasPizza(id: number): Observable<boolean> {
        return this.store.select(fromStore.getPizzasEntities).pipe(
            map((entities: { [key: number]: Pizza }) => Boolean(entities[id])),
            take(1)
        )
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getPizzasLoaded).pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromStore.LoadPizzas());
                }
            }),
            filter(loaded => loaded),
            take(1)
        )
    }
}