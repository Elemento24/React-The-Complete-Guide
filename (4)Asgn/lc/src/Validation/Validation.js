import React from 'react';

const Validation = (props) => {
  let outputText = null;
  if (props.lenText <= 5)
    outputText = 'Text too short';
  else
    outputText = 'Text long enough';

  return (
    <div>
      <p>{outputText}</p>
    </div>
  );
};

export default Validation;