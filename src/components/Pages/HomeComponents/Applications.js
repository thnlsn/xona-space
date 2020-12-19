import React, { Fragment } from 'react';

const Applications = ({ heading, applications }) => {
  return (
    <Fragment>
      <h1 className='applications__heading' data-aos='fade'>
        {heading}
      </h1>
      <div className='apps'>
        {/* Create an application for each object in the prop applications */}
        {applications.map((application, index) => (
          <div className='apps__app' key={index}>
            <div
              className='apps__container'
              style={{
                backgroundImage: `url(${application.image})`,
              }}
              data-aos='fade-up'
            >
              <div className='apps__text'>{application.text}</div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Applications;
