import React from 'react';

// COMPONENTS
import Applications from './HomeComponents/Applications';
import Articles from './HomeComponents/Articles';

// Importing all image paths from the database file
import { home, logos } from '../../data/database';

// Destructuring the data we need for this component
const { banner, documentLink, pulsar, applications, news } = home;
const { icon /* iconWhite */ } = logos;

// BACKGROUND IMAGES
console.log(home);

const Home = () => {
  return (
    <div className='home'>
      <div
        className='home-banner'
        style={{
          backgroundImage: `url(${banner.background})`,
        }}
      >
        <h1 className='home-heading heading-primary'>
          <span className='emphasis'>{banner.emphazisedWord}</span>
          {banner.header}
        </h1>
        <svg className='scroll-indicator' viewBox='0 0 20 10' width='4rem'>
          <path d='M0 0 L10 10 L20 0'></path>
        </svg>
      </div>
      <section className='main-quote'>
        <a
          className='main-quote__heading'
          href={documentLink.url}
          target='_blank'
          rel='noopener noreferrer' // For security purposes
          data-aos='fade-up'
        >
          {documentLink.text}
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

      <section className='applications' data-aos='fade'>
        <Applications
          heading={applications.heading}
          applications={applications.items}
        />
      </section>

      <section className='news'>
        <Articles heading={news.heading} articles={news.articles} />
      </section>
    </div>
  );
};

export default Home;
