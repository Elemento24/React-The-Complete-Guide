import * as actionTypes from './actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.DELETE:
      const updatedPersonsArray = state.persons.filter(per => per.id !== action.personId);
      return {
        ...state,
        persons: updatedPersonsArray
      };
  }
  return state;
};

export default reducer;