import React from 'react';
import Person from './Person/Person';

const Persons = props => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.cliked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
}
export default Persons;