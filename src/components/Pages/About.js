import React from 'react';

// Importing all data for this component from the database file
import { about } from '../../data/database';
import Hero from './AboutComponents/AboutHero';
import Members from './AboutComponents/Members';
import Member from './AboutComponents/MemberCard';

// Destructuring the data we need for this component
const { hero, description, teamHeading, members } = about;
// const { icon /* iconWhite */ } = logos;

const About = () => {
  return (
    <div className='about'>
      {/* ▉ ABOUT PAGE BANNER/HERO */}
      <section className='about-banner'>
        <Hero
          leftHeading={hero.leftHeading}
          rightHeading={hero.rightHeading}
          leftImage={hero.leftImage}
          rightImage={hero.rightImage}
        />
      </section>
      {/* ▉ ABOUT PAGE DESCRIPTION */}
      <section className='about-description'>{description}</section>
      {/*  ▉ SPACER - to provide some space between the team description and the team members section (with all the member cards) */}
      <div className='about-banner about-banner--spacer'>
        <div className='about-banner__left about-banner__left--spacer'></div>
        <div className='about-banner__right about-banner__right--spacer'></div>
      </div>
      <section className='xona-team'>
        <Members />
      </section>
    </div>
  );
};

export default About;
