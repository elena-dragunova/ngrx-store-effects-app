import * as fromPizzas from './pizzas.action';

describe('Pizza Actions', () => {
    describe('LoadPizzas Actions', () => {
        describe('LoadPizzas', () => {
            it('shouls create an action', () => {
                const action = new fromPizzas.LoadPizzas();

                expect({ ...action }).toEqual({
                    type: fromPizzas.LOAD_PIZZAS,
                })
            })
        })

        describe('LoadPizzasFail', () => {
            it('shouls create an action', () => {
                const payload = { message: 'Load Error ' }
                const action = new fromPizzas.LoadPizzasFail(payload);

                expect({ ...action }).toEqual({
                    type: fromPizzas.LOAD_PIZZAS_FAIL,
                    payload
                })
            })
        })

        describe('LoadPizzasSuccess', () => {
            it('shouls create an action', () => {
                const payload = pizzas;
                const action = new fromPizzas.LoadPizzasSuccess(payload);

                expect({ ...action }).toEqual({
                    type: fromPizzas.LOAD_PIZZAS_SUCCESS,
                    payload
                })
            })
        })
    })

    describe('CreatePizza Actions', () => {
        describe('CreatePizza', () => {
            it('shouls create an action', () => {
                const payload = {
                    "name": "Blazin' Inferno",
                    "toppings": [
                      {
                        "id": 10,
                        "name": "pepperoni"
                      },
                      {
                        "id": 9,
                        "name": "pepper"
                      }
                    ],
                    "id": 1
                  }
                const action = new fromPizzas.CreatePizza(payload);

                expect({ ...action }).toEqual({
                    type: fromPizzas.CREATE_PIZZA,
                    payload
                })
            })
        })

        describe('CreatePizzaFail', () => {
            it('shouls create an action', () => {
                const payload = { message: 'Create Error ' }
                const action = new fromPizzas.CreatePizzaFail(payload);

                expect({ ...action }).toEqual({
                    type: fromPizzas.CREATE_PIZZA_FAIL,
                    payload
                })
            })
        })

        describe('CreatePizzaSuccess', () => {
            it('shouls create an action', () => {
                const payload = {
                    "name": "Blazin' Inferno",
                    "toppings": [
                      {
                        "id": 10,
                        "name": "pepperoni"
                      },
                      {
                        "id": 9,
                        "name": "pepper"
                      }
                    ],
                    "id": 1
                  }
                const action = new fromPizzas.CreatePizzaSuccess(payload);

                expect({ ...action }).toEqual({
                    type: fromPizzas.CREATE_PIZZA_SUCCESS,
                    payload
                })
            })
        })
    })
})

const pizzas = [
    {
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
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
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      "id": 1
    },
    {
      "name": "Seaside Surfin'",
      "toppings": [
        {
          "id": 6,
          "name": "mushroom"
        },
        {
          "id": 7,
          "name": "olive"
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
          "id": 1,
          "name": "anchovy"
        },
        {
          "id": 8,
          "name": "onion"
        },
        {
          "id": 11,
          "name": "sweetcorn"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 5,
          "name": "mozzarella"
        }
      ],
      "id": 2
    },
    {
      "name": "Plain Ol' Pepperoni",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        }
      ],
      "id": 3
    }
  ]