import React from 'react';

// COMPONENTS
import Applications from './HomeComponents/Applications';
import Articles from './HomeComponents/Articles';
import XonaPulsar from './HomeComponents/XonaPulsar';

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
      {/* HOME PAGE BANNER/HERO */}
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

      {/* INTRO SECTION */}
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

      {/* XONA PULSAR SECTION */}
      <section
        className='xona-pulsar'
        style={{
          backgroundImage: `url(${pulsar.background})`,
        }}
      >
        <XonaPulsar
          icon={icon}
          name={pulsar.name}
          description={pulsar.description}
          abilities={pulsar.abilities}
        />
      </section>

      {/* APPLICATIONS SECTION */}
      <section className='applications' data-aos='fade'>
        <Applications
          heading={applications.heading}
          applications={applications.items}
        />
      </section>

      {/* NEWS SECTION */}
      <section className='news'>
        <Articles heading={news.heading} articles={news.articles} />
      </section>
    </div>
  );
};

export default Home;
