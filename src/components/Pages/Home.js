import React from 'react';

import icon from '../../images/xona-icon.png';
import icon_white from '../../images/xona-icon-white.png';

import xona_encryption from '../../images/encryption.jpg';
import xona_strength from '../../images/strength.jpg';
import xona_convergence from '../../images/convergence.jpg';

import smart_agriculture from '../../images/backgroundImages/smart-agriculture.jpg';

import { home } from '../../data/database';

// COMPONENTS
import Applications from './HomeComponents/Applications';
import Article from '../Components/NewsArticle';

const { banner, documentLink, pulsar, applications, news } = home;

// BACKGROUND IMAGES
console.log(home);

const Home = () => {
  return (
    <div className='home'>
      <div
        className='home-banner'
        style={{
          backgroundImage: `url(${home.banner.background})`,
        }}
      >
        <h1 className='home-heading heading-primary'>
          <span className='emphasis'>{home.banner.emphazisedWord}</span>
          {home.banner.header}
        </h1>
        <svg className='scroll-indicator' viewBox='0 0 20 10' width='4rem'>
          <path d='M0 0 L10 10 L20 0'></path>
        </svg>
      </div>
      <section className='main-quote'>
        <a
          className='main-quote__heading'
          href={home.documentLink.url}
          target='_blank'
          data-aos='fade-up'
        >
          {home.documentLink.text}
          <span className='main-quote__rarr'>&rarr;</span>
        </a>
        <div className='main-quote__text' data-aos='fade-up'>
          {home.documentLink.explanation}
        </div>
      </section>
      {/* Xona Pulsar */}
      <section
        className='xona-pulsar'
        style={{
          backgroundImage: `url(${pulsar.background})`,
        }}
      >
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
            <div className='xona-pulsar__image-description'>
              Stronger Signals
            </div>
          </div>
          <div className='xona-pulsar__application' data-aos='fade-up'>
            <img src={pulsar.benefits[2][1]} alt='Pulsar Convergence' />
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
        <Applications applications={applications} />
      </section>

      <section className='news'>
        <h1 className='news__heading'>News</h1>
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
