import React from 'react';
import Person from './Person';

const List = ({ people, deletePerson, deletePeople }) => {
  return (
    <section className='container '>
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} deletePerson={deletePerson} />
        );
      })}
      <button
        type='button'
        className='btn btn-block btn-danger'
        onClick={deletePeople}
      >
        Delete All
      </button>
    </section>
  );
};

export default List;
