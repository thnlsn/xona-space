import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <div className='about-banner'>
        <div className='about-banner__left'>
          <div className='about-banner__heading-left'>What Drives Us</div>
        </div>
        <div className='about-banner__right'>
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
    </div>
  );
};

export default About;
