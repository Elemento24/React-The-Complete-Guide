import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

// We typically name the global constants in our App, in Uppercase
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredient = (state, action) => {
  const updatedIngredient_1 = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
  const updatedIngredients_1 = updateObject(state.ingredients, updatedIngredient_1);
  const updatedState_1 = {
    ingredients: updatedIngredients_1,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  };
  return updateObject(state, updatedState_1);
};

const removeIngredient = (state, action) => {
  const updatedIngredient_2 = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
  const updatedIngredients_2 = updateObject(state.ingredients, updatedIngredient_2);
  const updatedState_2 = {
    ingredients: updatedIngredients_2,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
  };
  return updateObject(state, updatedState_2);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, {
    error: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
    default: return state;
  }
}

export default reducer;