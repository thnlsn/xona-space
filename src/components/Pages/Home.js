import React from 'react';

import icon from '../../images/xona-icon.png';
import icon_white from '../../images/xona-icon-white.png';
import xona_encryption from '../../images/encryption.jpg';
import xona_strength from '../../images/strength.jpg';
import xona_convergence from '../../images/convergence.jpg';

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
      {/* Xona Pulsar */}
      <section className='xona-pulsar'>
        <div className='xona-pulsar__banner' data-aos='fade-up'>
          <div className='xona-pulsar__tm' /* data-aos='fade-up' */>
            <div className='xona-pulsar__icon' /* data-aos='fade-up' */>
              <img src={icon} alt='Xona Icon' />
            </div>
            xona pulsar<span>&trade;</span>
          </div>
          <div className='xona-pulsar__text' /* data-aos='fade-up' */>
            With satellites in low Earth orbit, Xona's Pulsar™ Position,
            Navigation and Timing (PNT) service will provide the security,
            availability and accuracy needed to support the age of autonomy.
          </div>
        </div>
        <div className='xona-pulsar__images'>
          <div className='xona-pulsar__application' data-aos='fade-up'>
            <img src={xona_encryption} alt='Pulsar Encryption' />
            <div className='xona-pulsar__image-description'>
              Encryption & Precision Corrections
            </div>
          </div>
          <div className='xona-pulsar__application' data-aos='fade-up'>
            <img src={xona_strength} alt='Pulsar Strength' />
            <div className='xona-pulsar__image-description'>
              Stronger Signals
            </div>
          </div>
          <div className='xona-pulsar__application' data-aos='fade-up'>
            <img src={xona_convergence} alt='Pulsar Convergence' />
            <div className='xona-pulsar__image-description'>
              Faster Convergence
            </div>
          </div>
        </div>
      </section>
      {/* 
      All Weather Autonomy
      Weather Data
      Critical Infrastructure
      Aerial Mobility
      Smart Agriculture
      Maritime
      */}
      <section className='applications' data-aos='fade'>
        <h1 className='applications__heading'>Applications</h1>
        <div className='apps'>
          <div className='apps__app'>
            <div
              className='apps__container apps__container--1'
              data-aos='fade-up'
            >
              <div className='apps__text'>All Weather Autonomy</div>
            </div>
          </div>
          <div className='apps__app'>
            <div
              className='apps__container apps__container--2'
              data-aos='fade-up'
            >
              <div className='apps__text'>Weather Data</div>
            </div>
          </div>
          <div className='apps__app'>
            <div
              className='apps__container apps__container--3'
              data-aos='fade-up'
            >
              <div className='apps__text'>Critical Infrastructure</div>
            </div>
          </div>
          <div className='apps__app'>
            <div
              className='apps__container apps__container--4'
              data-aos='fade-up'
            >
              <div className='apps__text'>Aerial Mobility</div>
            </div>
          </div>
          <div className='apps__app'>
            <div
              className='apps__container apps__container--5'
              data-aos='fade-up'
            >
              <div className='apps__text'>Smart Agriculture</div>
            </div>
          </div>
          <div className='apps__app'>
            <div
              className='apps__container apps__container--6'
              data-aos='fade-up'
            >
              <div className='apps__text'>Maritime</div>
            </div>
          </div>
        </div>
      </section>
      <section className='news'>
        <h1 className='news-heading'>News</h1>
        <div className='articles'>
          <div className='articles__article'>Article 1</div>

          <div className='articles__article'>Article 2</div>

          <div className='articles__article'>Article 3</div>

          <div className='articles__article'>Article 4</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
