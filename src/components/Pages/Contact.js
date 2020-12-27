import React from 'react';

// Importing all data for this component from the database file
import { contact, socials } from '../../data/database';

// Destructuring the data we need for this component
const { hero } = contact;

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-banner'>
        <div className='contact-banner__info-container'>
          <div className='contact-banner__info'>
            <div className='contact-banner__heading'>{hero.heading}</div>
            <div className='contact-banner__address-container'>
              <div className='contact-banner__sub-heading'>
                {hero.subHeading1}
              </div>
              <div className='contact-banner__address'>
                <span>{hero.address.line1}</span>
                <span>{hero.address.line2}</span>
              </div>
            </div>
            <div className='contact-banner__socials-container'>
              <div className='contact-banner__sub-heading'>
                {hero.subHeading2}
              </div>
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

          <iframe
            className='google-maps'
            frameBorder='0'
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Xona+Space+Systems`}
            allowFullScreen
          ></iframe>
        </div>

        <div className='contact-banner__form-container'>
          <form className='contact-form' action='#'>
            <h2 className='contact-form__heading'>Contact Us</h2>
            <div className='contact-form__container'>
              {/* Text input 1 */}
              <div className='contact-form__group'>
                <input
                  type='text'
                  className='contact-form__input'
                  placeholder='First name'
                  id='first-name'
                />
                <label htmlFor='first-name' className='form__label'>
                  First name
                </label>
              </div>
              {/* Text input 2 */}
              <div className='contact-form__group'>
                <input
                  type='text'
                  className='contact-form__input'
                  placeholder='Last name'
                  id='last-name'
                />
                <label htmlFor='last-name' className='form__label'>
                  Last name
                </label>
              </div>
              {/* Text input 3 */}
              <div className='contact-form__group'>
                <input
                  type='email'
                  className='contact-form__input'
                  placeholder='Email'
                  id='email'
                />
                <label htmlFor='email' className='form__label'>
                  Email
                </label>
              </div>
              {/* Text input 4 */}
              <div className='contact-form__group'>
                <input
                  type='text'
                  className='contact-form__input'
                  placeholder='Subject'
                  id='subject'
                />
                <label htmlFor='subject' className='form__label'>
                  Subject
                </label>
              </div>
              {/* Text input 5 */}
              <div className='contact-form__message'>
                <textarea
                  type='text'
                  className='contact-form__input'
                  placeholder='Message'
                  id='message'
                />
                <label htmlFor='message' className='form__label'>
                  Leave us a message...
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
