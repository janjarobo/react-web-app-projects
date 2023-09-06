import { useState } from 'react';

const Form = ({ newColor }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    newColor(color);
  };

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form onSubmit={handleSubmit} className='color-form'>
        <input
          type='color'
          name='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#000000'
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
