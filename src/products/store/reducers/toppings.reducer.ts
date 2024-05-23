import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

export interface ToppingsState {
    entities: { [id: number]: Topping };
    loaded: boolean;
    loading: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loaded: false,
    loading: false,
    selectedToppings: []
}

export function reducer(
    state = initialState,
    actions: fromToppings.ToppingsAction
): ToppingsState {

    switch(actions.type) {
        case fromToppings.LOAD_TOPPINGS: {
            return {
                ...state,
                loading: true
            }
        }

        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const toppings = actions.payload;

            const entities = toppings.reduce((entities: { [id: number] : Topping }, topping: Topping) => {
                return {
                    ...entities,
                    [topping.id]: topping
                }
            }, {
                ...state.entities
            })

            return {
                ...state,
                entities,
                loading: false,
                loaded: true
            }
        }

        case fromToppings.LOAD_TOPPINGS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case fromToppings.VISUALISE_TOPPINGS: {
            const selectedToppings = actions.payload;

            return {
                ...state,
                selectedToppings
            }
        }
    }

    return state;
}

export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;