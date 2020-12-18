import React, { Fragment } from 'react';

const XonaPulsar = ({}) => {
  return (
    <Fragment>
      <div className='xona-pulsar__banner' data-aos='fade-up'>
        <div className='xona-pulsar__tm'>
          <div className='xona-pulsar__icon'>
            <img src={icon} alt='Xona Icon' />
          </div>
          xona pulsar<span>&trade;</span>
        </div>
        <div className='xona-pulsar__text'>
          With satellites in low Earth orbit, Xona's Pulsar™ Position,
          Navigation and Timing (PNT) service will provide the security,
          availability and accuracy needed to support the age of autonomy.
        </div>
      </div>
      <div className='xona-pulsar__images'>
        <div className='xona-pulsar__application' data-aos='fade-up'>
          <img src={pulsar.benefits[0][1]} alt='Pulsar Encryption' />
          <div className='xona-pulsar__image-description'>
            Encryption & Precision Corrections
          </div>
        </div>
        <div className='xona-pulsar__application' data-aos='fade-up'>
          <img src={pulsar.benefits[1][1]} alt='Pulsar Strength' />
          <div className='xona-pulsar__image-description'>Stronger Signals</div>
        </div>
        <div className='xona-pulsar__application' data-aos='fade-up'>
          <img src={pulsar.benefits[2][1]} alt='Pulsar Convergence' />
          <div className='xona-pulsar__image-description'>
            Faster Convergence
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default XonaPulsar;
