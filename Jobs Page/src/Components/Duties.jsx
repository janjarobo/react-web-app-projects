import React from 'react';
import { GiBulletBill } from 'react-icons/gi';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div key={uuidv4()} className='job-desc'>
            <GiBulletBill className='job-icon' />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
