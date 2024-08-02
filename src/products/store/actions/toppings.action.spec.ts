import * as fromToppings from './toppings.action';

describe('Toppings Actions', () => {
    describe('LoadToppings Actions', () => {
        describe('LoadToppings', () => {
            it('shouls create an action', () => {
                const action = new fromToppings.LoadToppings();

                expect({ ...action }).toEqual({
                    type: fromToppings.LOAD_TOPPINGS,
                })
            })
        })

        describe('LoadToppingsFail', () => {
            it('shouls create an action', () => {
                const payload = { message: 'Load Error ' }
                const action = new fromToppings.LoadToppingsFail(payload);

                expect({ ...action }).toEqual({
                    type: fromToppings.LOAD_TOPPINGS_FAIL,
                    payload
                })
            })
        })

        describe('LoadToppingsSuccess', () => {
            it('shouls create an action', () => {
                const payload = toppings;
                const action = new fromToppings.LoadToppingsSuccess(payload);

                expect({ ...action }).toEqual({
                    type: fromToppings.LOAD_TOPPINGS_SUCCESS,
                    payload
                })
            })
        })

        describe('VisualizeToppings', () => {
            it('shouls create an action', () => {
                const action = new fromToppings.VisualiseToppings([1, 2, 3]);

                expect({ ...action }).toEqual({
                    type: fromToppings.VISUALISE_TOPPINGS,
                    payload: [1, 2, 3]
                })
            })
        })
    })
})

const toppings = [
    {
      "id": 1,
      "name": "anchovy"
    },
    {
      "id": 2,
      "name": "bacon"
    },
    {
      "id": 3,
      "name": "basil"
    },
    {
      "id": 4,
      "name": "chili"
    },
    {
      "id": 5,
      "name": "mozzarella"
    },
    {
      "id": 6,
      "name": "mushroom"
    },
    {
      "id": 7,
      "name": "olive"
    },
    {
      "id": 8,
      "name": "onion"
    },
    {
      "id": 9,
      "name": "pepper"
    },
    {
      "id": 10,
      "name": "pepperoni"
    },
    {
      "id": 11,
      "name": "sweetcorn"
    },
    {
      "id": 12,
      "name": "tomato"
    }
  ]