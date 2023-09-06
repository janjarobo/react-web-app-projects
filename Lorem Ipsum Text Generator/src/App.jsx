import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = data.slice(0, count);
    setText(newText);
  };

  return (
    <section className='section-center'>
      <h4>Tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'></label>
        <input
          type='number'
          name='number'
          value={count}
          onChange={handleChange}
          min='1'
          max='8'
          step='1'
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <div className='lorem-text'>
        {text.map((soloText) => {
          const id = nanoid();
          return (
            <div key={id}>
              <p>{soloText}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default App;
