import React from 'react';

const Person = ({ id, name, image, age, deletePerson }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <h2>{name}</h2>
      <h4>{age} years old</h4>
      <button type='button' className='btn' onClick={() => deletePerson(id)}>
        delete
      </button>
    </article>
  );
};

export default Person;
