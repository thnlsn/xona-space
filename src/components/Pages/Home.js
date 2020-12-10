import React from 'react';

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
      <div className='main-quote'>
        <a
          className='main-quote__heading'
          href='https://www.rti.org/sites/default/files/gps_finalreport.pdf'
          target='_blank'
        >
          Over $300 billion per year relies on an unprotected navigation net
        </a>
        <div className='main-quote__text'>
          Intelligent systems require a navigation solution that supports
          safety-critical operation, centimeter positioning, and cybersecurity
          for millions of users
        </div>
      </div>
    </div>
  );
};

export default Home;
