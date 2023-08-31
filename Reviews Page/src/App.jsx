import { useState } from 'react';
import reviews from './data';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumIndex = (num) => {
    //for prevButton
    if (num < 0) {
      return reviews.length - 1;
    }
    //for nextButton
    if (num > reviews.length - 1) {
      return 0;
    }
    return num;
  };

  const previous = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumIndex(newIndex);
    });
  };

  const next = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumIndex(newIndex);
    });
  };

  //random button
  const random = () => {
    const randomNum = Math.floor(Math.random() * reviews.length);
    if (randomNum === index) {
      randomNum += 1;
    }
    setIndex(randomNum);
  };
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button type='button' className='prev-btn' onClick={previous}>
            <AiFillCaretLeft />
          </button>
          <button type='button' className='next-btn' onClick={next}>
            <AiFillCaretRight />
          </button>
        </div>
        <button type='button' className='btn btn-hipster' onClick={random}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
