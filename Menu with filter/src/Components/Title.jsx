import React from 'react';

const Title = ({ text }) => {
  return (
    <section className='title'>
      <h2>{text || 'Default Title'}</h2>
      <div className='title-underline'></div>
    </section>
  );
};

export default Title;
