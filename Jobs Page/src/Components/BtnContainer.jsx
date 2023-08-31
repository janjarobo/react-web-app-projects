import React from 'react';

const BtnContainer = ({ jobData, setCurrentItem, currentItem }) => {
  return (
    <div className='btn-container'>
      {jobData.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => {
              console.log(index);
              setCurrentItem(index);
            }}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
