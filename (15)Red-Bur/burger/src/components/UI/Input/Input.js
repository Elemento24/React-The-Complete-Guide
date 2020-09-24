import React from 'react';

import classes from './Input.module.css';

const input = props => {
  let inputElement = null;
  let validationError = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    validationError = <p className={classes.ValidationError}>Please Enter a Valid Value!</p>
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        onChange={props.changed}
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
      />;
      break;
    case ('textarea'):
      inputElement = <textarea
        onChange={props.changed}
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
      />;
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayName}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input
        onChange={props.changed}
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
      />;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
}

export default input;