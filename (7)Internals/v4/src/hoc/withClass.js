import React from 'react';

// FIRST WAY OF USING REACT HIGHER ORDER FUNCTIONS
// const withClass = (props) => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

// SECOND WAY OF USING REACT HIGHER ORDER FUNCTIONS
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withClass;