import React from 'react';

const PulsarAbility = ({ ability }) => {
  // ability: ['description', 'image']
  return (
    <div className='xona-pulsar__ability'>
      <img src={ability[1]} alt='Pulsar Encryption' />
      <div className='xona-pulsar__image-description'>{ability[0]}</div>
    </div>
  );
};

export default PulsarAbility;
