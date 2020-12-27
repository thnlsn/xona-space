import React from 'react';

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
            <div className='contact-banner__socials-links'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
