import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Carousel = ({ data }) => {
  const [group, setGroup] = useState(data);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prev = () => {
    setCurrentPerson((oldPerson) => {
      let result = (oldPerson - 1 + group.length) % group.length;
      return result;
    });
  };
  const next = () => {
    setCurrentPerson((oldPerson) => {
      let result = (oldPerson + 1) % group.length;
      return result;
    });
  };

  useEffect(() => {
    let autoSlide = setInterval(() => {
      next();
    }, 4000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [currentPerson]);
  return (
    <section className='slider-container'>
      {group.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        return (
          <article
            key={id}
            style={{
              transform: `translate(${100 * (personIndex - currentPerson)}%)`,
            }}
            className='slide'
          >
            <img src={image} alt={name} className='person-img' />
            <h4 className='name'>{name}</h4>
            <h5 className='title'>{title}</h5>
            <p className='text'>
              {quote}
              <FaQuoteRight className='icon' />
            </p>
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prev}>
        <GrFormPrevious />
      </button>
      <button type='button' className='next' onClick={next}>
        <GrFormNext />
      </button>
    </section>
  );
};

export default Carousel;
