import * as fromPizzas from "../actions/pizzas.action";
import { Pizza } from "src/products/models/pizza.model"

export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    data: [
        {
            name: "Plain Ol' Pepperoni",
            toppings: [
              {
                id: 10,
                name: "pepperoni"
              }
            ],
            id: 3
        }
    ],
    loaded: false,
    loading: false
}

export function reducer(
    state = initialState,
    actions: fromPizzas.PizzasAction
): PizzaState {

    switch(actions.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true
            }
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            }
        }
    }

    return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;