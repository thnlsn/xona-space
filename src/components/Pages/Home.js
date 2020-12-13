import React from 'react';

import icon from '../../images/xona-icon.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-banner'>
        <h1 className='home-heading heading-primary'>
          <span className='emphasis'>Navigation</span> for the age of autonomy
        </h1>
        <svg className='scroll-indicator' viewBox='0 0 20 10' width='4rem'>
          <path d='M0 0 L10 10 L20 0'></path>
        </svg>
      </div>
      <section className='main-quote'>
        <a
          className='main-quote__heading'
          href='https://www.rti.org/sites/default/files/gps_finalreport.pdf'
          target='_blank'
          data-aos='fade-up'
        >
          Over $300 billion per year relies on an unprotected navigation net
          <span className='main-quote__rarr'>&rarr;</span>
        </a>
        <div className='main-quote__text' data-aos='fade-up'>
          Intelligent systems require a navigation solution that supports
          safety-critical operation, centimeter positioning, and cybersecurity
          for millions of users
        </div>
      </section>
      <section className='xona-pulsar'>
        <div className='xona-pulsar__images'>
          <div className='xona-pulsar__application'></div>
          <div className='xona-pulsar__application'></div>
          <div className='xona-pulsar__application'></div>
        </div>
        <div className='xona-pulsar__banner' data-aos='fade-left'>
          <div className='xona-pulsar__icon'>
            <img src={icon} alt='Xona Icon' />
          </div>
          <div className='xona-pulsar__tm'>
            xona pulsar<span>&trade;</span>
          </div>
          <div className='xona-pulsar__text'>
            With satellites in low Earth orbit, Xona's Pulsar™ Position,
            Navigation and Timing (PNT) service will provide the security,
            availability and accuracy needed to support the age of autonomy
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
