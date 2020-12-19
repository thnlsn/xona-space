import React from 'react';

// COMPONENTS
import Hero from './HomeComponents/Hero';
import DocumentLink from './HomeComponents/DocumentLink';
import XonaPulsar from './HomeComponents/XonaPulsar';
import Applications from './HomeComponents/Applications';
import Articles from './HomeComponents/Articles';

// Importing all data for this component from the database file
import { home, logos } from '../../data/database';

// Destructuring the data we need for this component
const { hero, link, pulsar, applications, news } = home;
const { icon /* iconWhite */ } = logos;

// BACKGROUND IMAGES
console.log(home);

const Home = () => {
  return (
    <div className='home'>
      {/* ▉ HOME PAGE BANNER/HERO */}
      <div
        className='home-banner'
        style={{
          backgroundImage: `url(${hero.background})`,
        }}
      >
        <Hero emphasis={hero.emphazisedWord} header={hero.header} />
      </div>

      {/* ▉ INTRO SECTION */}
      <section className='main-quote'>
        <DocumentLink
          text={link.text}
          url={link.url}
          explanation={link.explanation}
        />
      </section>

      {/* ▉ XONA PULSAR SECTION */}
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

      {/* ▉ APPLICATIONS SECTION */}
      <section className='applications'>
        <Applications
          heading={applications.heading}
          applications={applications.items}
        />
      </section>

      {/* ▉ NEWS SECTION */}
      <section className='news'>
        <Articles heading={news.heading} articles={news.articles} />
      </section>
    </div>
  );
};

export default Home;
