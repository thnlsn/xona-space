import React, { Fragment } from 'react';

// Importing all data for this component from the database file
import { about } from '../../data/database';
import MemberCard from './AboutComponents/MemberCard';

// Destructuring the data we need for this component
const { hero, members } = about;
// const { icon /* iconWhite */ } = logos;

const About = () => {
  return (
    <div className='about'>
      <section className='about-banner'>
        <div
          className='about-banner__left'
          style={{
            backgroundImage: `url(${hero.leftImage})`,
          }}
        >
          <div className='about-banner__heading-left'>What Drives Us</div>
        </div>
        <div
          className='about-banner__right'
          style={{
            backgroundImage: `url(${hero.rightImage})`,
          }}
        >
          <div className='about-banner__heading-right'>
            Enabling intelligent systems to operate safely in any environment.
          </div>
        </div>
      </section>
      <section className='about-description'>
        We are a group of space ninjas, engineers, GPS nerds, motorcycle racers,
        and adventurers. Our experience comes from SpaceX, Blue Origin, Booz
        Allen Hamilton, NASA, Ford Motor Company, and Stanford GPS Lab. We
        helped put over 50 vehicles in space and have published over 50
        scientific papers advancing navigation technology.
      </section>
      <div className='about-banner about-banner--spacer'>
        <div className='about-banner__left about-banner__left--spacer'></div>
        <div className='about-banner__right about-banner__right--spacer'></div>
      </div>
      <section className='xona-team'>
        <div className='xona-team__heading'>We are Xona</div>
        <div className='xona-team__container'>
          {members.map((member) => (
            <div className='member'>
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className='member__image'
              />
              <div className='member__name'>{member.name}</div>
              <div className='member__role'>{member.role}</div>
              <div className='member__experience'>
                {member.experience.map((position) => (
                  <div className='member__experience-container'>
                    <div className='member__experience-title'>
                      {position.title}
                    </div>
                    <div className='member__experience-location'>
                      {position.location}
                    </div>
                  </div>
                ))}
                <div className='member__hobbies'>{member.hobbies}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
