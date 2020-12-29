import React from 'react';

const Careers = ({ backgroundImage }) => {
  return (
    <div className='careers'>
      <div
        className='careers-banner'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </div>
  );
};

export default Careers;
