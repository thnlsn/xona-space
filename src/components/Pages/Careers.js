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
      >
        <div className='careers-banner__heading'>{hero.heading}</div>
      </div>
      <div className='benefits'>
        {benefits.map((benefit) => (
          <div className='benefits__item'>
            <ion-icon className='benefits__icon' name={benefit.icon}></ion-icon>
            <div className='benefits__heading'>{benefit.heading}</div>
            <div className='benefits__description'>{benefit.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
