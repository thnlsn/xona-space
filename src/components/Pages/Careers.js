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
            <ion-icon name={benefit.icon}></ion-icon>
            <div className='benefits__heading'>{benefit.heading}</div>
            <div className='benefits__description'>{benefit.text}</div>
          </div>
        ))}
      </div>
      <div className='availabilities'>
        <div className='availabilities__heading'>{availabilities.heading}</div>
        <div className='availabilities__positions'>
          {positions.map((position) => (
            <summary className='position'>
              <div className='position__container'>
                <div className='position__heading'>{position.title}</div>
                <ul className='position__details'>
                  <li className='position__area'>{position.area}</li>
                  <li className='position__location'>{position.location}</li>
                  <li className='position__time-commitment'>
                    {position.timeCommitment}
                  </li>
                </ul>
              </div>

              <a
                href={`careers/${position.url}`}
                className='btn btn--basic'
                /*                 target='_blank' */
                rel='noopener noreferrer'
              >
                {availabilities.buttonText}
              </a>
            </summary>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
