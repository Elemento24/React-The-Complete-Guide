import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  console.log('RENDERING INGREDIENT FORM');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({
      title: enteredTitle,
      amount: enteredAmount
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={
                event => { setEnteredTitle(event.target.value); }
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={
                event => { setEnteredAmount(event.target.value); }
              }
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

// We can pass the Initial State in 'useState', which can be anything such as an Object, Array, Number, etc, unlike class based components, where state, can only be an Object.
// Also, useState always return an array of exactly 2 components, where the first component is basically a snapshot of the current state, and the second component is a function, which we can use to update the current state.