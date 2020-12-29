import React from 'react';

// Importing all data for this component from the database file
import { careers } from '../../data/database';

// Destructuring the data we need for this component
const { hero, benefits, availabilities, positions } = careers;

const Careers = () => {
  return (
    <div className='careers'>
      <div
        className='careers-banner'
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
        }}
      ></div>
    </div>
  );
};

export default Careers;
