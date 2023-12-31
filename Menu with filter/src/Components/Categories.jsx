import React from 'react';

const Categories = ({ categories, filter }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            className='btn'
            type='button'
            key={category}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
