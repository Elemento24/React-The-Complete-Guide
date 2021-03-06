import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // setTimeout(() => {
    //   // HTTP Request ...
    //   alert('Made an HTTP Request');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is Really Working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons</button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);