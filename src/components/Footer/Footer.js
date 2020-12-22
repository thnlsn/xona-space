import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
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
      </div>
      <div className='footer__copyright'>
        &copy; 2020 Xona Space Systems, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;