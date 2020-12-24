import React from 'react';

// Importing all data for this component from the database file
import { about } from '../../data/database';

// Destructuring the data we need for this component
const { hero } = about;
// const { icon /* iconWhite */ } = logos;

const About = () => {
  return (
    <div className='about'>
      <div className='about-banner'>
        <div
          className='about-banner__left'
          style={{
            backgroundImage: `url(${hero.leftImage})`,
          }}
        >
          <div className='about-banner__heading-left'>What Drives Us</div>
        </div>
        <div
          className='about-banner__right'
          style={{
            backgroundImage: `url(${hero.rightImage})`,
          }}
        >
          <div className='about-banner__heading-right'>
            Enabling intelligent systems to operate safely in any environment.
          </div>
        </div>
      </div>
      <div className='about-description'>
        We are a group of space ninjas, engineers, GPS nerds, motorcycle racers,
        and adventurers. Our experience comes from SpaceX, Blue Origin, Booz
        Allen Hamilton, NASA, Ford Motor Company, and Stanford GPS Lab. We
        helped put over 50 vehicles in space and have published over 50
        scientific papers advancing navigation technology.
      </div>
      <div className='about-banner about-banner--spacer'>
        <div className='about-banner__left about-banner__left--spacer'></div>
        <div className='about-banner__right about-banner__right--spacer'></div>
      </div>
      <div className='xona-team'>
        <div className='xona-team__heading'>We are Xona</div>
      </div>
    </div>
  );
};

export default About;
