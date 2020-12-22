import React from 'react';

// Importing all data for this component from the database file
import { logos } from '../../data/database';

// Destructuring the data we need for this component
const { iconWhite } = logos;

const Footer = ({ socials }) => {
  return (
    <footer className='footer'>
      <img src={iconWhite} alt='Xona Space' className='footer__logo' />
      <div className='footer__container'>
        <div className='footer__section'>
          <div className='footer__heading'>Contact us</div>
          <div className='footer__item'>157 South Blvd</div>
          <div className='footer__item'>San Mateo, CA 94402</div>
          <div className='footer__item'>info@xonaspace.com</div>
        </div>
        <div className='footer__section'>
          <div className='footer__heading'>Subscribe to our newsletter</div>
          <form action='#' className='footer__form'>
            <input
              type='text'
              placeholder='Your email'
              className='footer__input'
            />
            <button className='btn'>Subscribe</button>
          </form>
          <div className='footer__socials'>
            {socials.map((social) => (
              <a
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='footer__github'
              >
                <img
                  className='footer__svg'
                  src={social.icon}
                  alt={`${social.name} Link`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        &copy; 2020 Xona Space Systems, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
