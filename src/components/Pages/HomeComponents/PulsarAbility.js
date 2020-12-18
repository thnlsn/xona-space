import React from 'react';

const PulsarAbility = ({ ability }) => {
  return (
    <div className='xona-pulsar__ability' data-aos='fade-up'>
      <img src={benefits[0][1]} alt='Pulsar Encryption' />
      <div className='xona-pulsar__image-description'>
        Encryption & Precision Corrections
      </div>
    </div>
  );
};

export default PulsarAbility;
