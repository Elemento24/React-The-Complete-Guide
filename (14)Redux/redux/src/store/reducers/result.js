import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case actionTypes.DELETE_RESULT:
      // This is the first method, where we use the Spread Operator, to create a Copy of the Array.
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      // This is the second method, where we use the Filter Function, which returns a New Array.
      const updatedArray = state.results.filter((result) => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      }
  }
  return state;
}

export default reducer;