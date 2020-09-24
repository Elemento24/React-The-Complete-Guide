import React from 'react';
import './Char.css';

const Char = (props) => {
  return (
    <div className='character' onClick={props.clicked}>
      {props.text}
    </div>
  );
};

export default Char;