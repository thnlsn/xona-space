import React from 'react';

import Application from './Application';

const Applications = ({ applications }) => {
  return (
    <div className='apps'>
      {applications.map((application) => (
        <div className='apps__app'>
          <div
            className='apps__container'
            style={{
              backgroundImage: `url(${application.image})`,
            }}
            data-aos='fade-up'
          >
            <div className='apps__text'>{application.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applications;
