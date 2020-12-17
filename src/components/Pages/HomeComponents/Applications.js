import React from 'react';

const Applications = ({ applications }) => {
  return (
    <div className='apps'>
      {/* Create an application for each object in the prop applications */}
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
