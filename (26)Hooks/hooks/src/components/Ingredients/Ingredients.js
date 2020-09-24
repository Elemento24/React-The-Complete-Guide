import React, { useEffect, useReducer, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import Ingredientlist from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not go there!');
  }
}

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clear } = useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({ type: 'ADD', ingredient: { id: data.name, ...reqExtra } })
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const filteredIngredientsHandler = useCallback(filIngs => {
    dispatch({ type: 'SET', ingredients: filIngs });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest(
      'https://react-hooks-f511a.firebaseio.com/ingredients.json',
      'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    );
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(ingredientId => {
    sendRequest(
      `https://react-hooks-f511a.firebaseio.com/ingredients/${ingredientId}.json`,
      'DELETE',
      null,
      ingredientId,
      'REMOVE_INGREDIENT'
    );
  }, [sendRequest]);

  const ingredientList = useMemo(() => {
    return (
      <Ingredientlist
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div >
  );
}

export default Ingredients;

// The 'useEffect' hook basically takes 2 arguments. The first being the function that needs to be run, whenever the component gets rendered. By default, the 'useEffect' hook executes the function, whenever the component first renders, and at each consequent render cycle. 
// The second argument to the 'useEffect' hook is basically the dependencies that the 'useEffect' hook should depend on. If we pass the second argument as an empty array, then the function will be executed only for once, when the component gets rendered for the first time, so it behaves like 'componentDidMount'.