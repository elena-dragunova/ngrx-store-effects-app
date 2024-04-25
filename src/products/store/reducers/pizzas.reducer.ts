import * as fromPizzas from "../actions/pizzas.action";
import { Pizza } from "src/products/models/pizza.model"

export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    data: [],
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