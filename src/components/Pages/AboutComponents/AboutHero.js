import React, { Fragment } from 'react';

const AboutHero = ({ leftHeading, rightHeading, leftImage, rightImage }) => {
  return (
    <Fragment>
      <div
        className='about-banner__left'
        style={{
          backgroundImage: `url(${leftImage})`,
        }}
      >
        <div className='about-banner__heading-left'>{leftHeading}</div>
      </div>
      <div
        className='about-banner__right'
        style={{
          backgroundImage: `url(${rightImage})`,
        }}
      >
        <div className='about-banner__heading-right'>{rightHeading}</div>
      </div>
    </Fragment>
  );
};

export default AboutHero;
