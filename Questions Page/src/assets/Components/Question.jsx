import React, { useState } from 'react';

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
        <button
          type='button'
          className='question-btn'
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? '-' : '+'}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
}

export default Question;
