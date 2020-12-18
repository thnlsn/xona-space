import React, { Fragment } from 'react';

const XonaPulsar = ({ icon, name, description, abilities }) => {
  return (
    <Fragment>
      <div className='xona-pulsar__banner' data-aos='fade-up'>
        <div className='xona-pulsar__tm'>
          <div className='xona-pulsar__icon'>
            <img src={icon} alt='Xona Icon' />
          </div>
          {name}
          <span>&trade;</span>
        </div>
        <div className='xona-pulsar__text'>{description}</div>
      </div>
      <div className='xona-pulsar__images'>
        <div className='xona-pulsar__ability' data-aos='fade-up'>
          <img src={abilities[0][1]} alt='Pulsar Encryption' />
          <div className='xona-pulsar__image-description'>
            Encryption & Precision Corrections
          </div>
        </div>
        <div className='xona-pulsar__ability' data-aos='fade-up'>
          <img src={abilities[1][1]} alt='Pulsar Strength' />
          <div className='xona-pulsar__image-description'>Stronger Signals</div>
        </div>
        <div className='xona-pulsar__ability' data-aos='fade-up'>
          <img src={abilities[2][1]} alt='Pulsar Convergence' />
          <div className='xona-pulsar__image-description'>
            Faster Convergence
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default XonaPulsar;
