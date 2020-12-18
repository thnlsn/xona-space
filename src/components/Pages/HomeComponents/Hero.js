import React, { Fragment } from 'react';

const Hero = ({ emphasis, header }) => {
  return (
    <Fragment>
      <h1 className='home-heading heading-primary'>
        <span className='emphasis'>{emphasis}</span>
        {header}
      </h1>
      <svg className='scroll-indicator' viewBox='0 0 20 10' width='4rem'>
        <path d='M0 0 L10 10 L20 0'></path>
      </svg>
    </Fragment>
  );
};

export default Hero;
