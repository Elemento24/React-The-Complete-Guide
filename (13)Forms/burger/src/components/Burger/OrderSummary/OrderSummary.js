import React, { Component, Fragment } from 'react';
import Button from '../../UI/Button/Button';

// This could be a Functional Component, doesn't has to be a Class Based Component
class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[Order Summary] Did Update')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
      });

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A Delicious Burger wit the following Ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
      </Fragment>
    );
  }
}

export default OrderSummary;