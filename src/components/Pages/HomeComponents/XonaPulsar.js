import React, { Fragment } from 'react';
import Ability from './PulsarAbility';

const XonaPulsar = ({ icon, name, description, abilities }) => {
  return (
    <Fragment>
      <div className='xona-pulsar__banner'>
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
        {abilities.map((ability, index) => (
          <Ability ability={ability} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default XonaPulsar;
