import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <iframe
        className='google-maps'
        frameborder='0'
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Xona+Space+Systems,San+WA`}
        allowfullscreen='true'
      ></iframe>
    </div>
  );
};

export default Contact;
