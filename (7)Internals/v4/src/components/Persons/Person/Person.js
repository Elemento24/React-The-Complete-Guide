import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...')
    return (
      <Fragment>
        {/* <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p>}
        </AuthContext.Consumer> */}
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p>}
        <p onClick={this.props.click} >
          I'm {this.props.name} and I am {this.props.age} years old!
        </p >
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          // ref={(inputEl) => { this.inputElement = inputEl }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// We can just wrap all our elements, inside the Aux element. It basically serves as a wrapper for all our elements, so that we don't have to return an array, where all the elements are separated by a Comma.