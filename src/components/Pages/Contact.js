import React from 'react';

// Importing all data for this component from the database file
import { contact, socials } from '../../data/database';

// Destructuring the data we need for this component
const { hero } = contact;

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-banner'>
        <iframe
          className='google-maps'
          frameBorder='0'
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Xona+Space+Systems`}
          allowFullScreen
        ></iframe>
        <div className='contact-banner__info'>
          <div className='contact-banner__heading'>Get in touch</div>
          <div className='contact-banner__address-container'>
            <div className='contact-banner__address-heading'>Address</div>
            <div className='contact-banner__address'>
              <span>157 South Blvd</span>
              <span>San Mateo, CA 94402</span>
            </div>
          </div>
          <div className='contact-banner__socials-container'>
            <div className='contact-banner__socials-heading'>Follow Us</div>
            <div className='contact-banner__socials'>
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-banner__social-link'
                  key={index}
                >
                  <img
                    className='contact-banner__svg'
                    src={social.icon}
                    alt={`${social.name} Link`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
