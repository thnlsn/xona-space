import React, { useState, Fragment } from 'react';
import Slider from './Slider';

const Applications = ({ heading, applications }) => {
  const [slide, setSlide] = useState(0);

  return (
    <Fragment>
      <h1 className='applications__heading'>{heading}</h1>
      <div className='apps'>
        {/* Create an application for each object in the prop applications */}
        {applications.map((app, index) => (
          <div className='app'>
            <div
              className='app__container'
              style={{
                backgroundImage: `url(${app.image})`,
                transform: `translateX(${(index - slide) * 100}%)`,
              }}
            >
              <div className='app__text'>{app.text}</div>
            </div>
          </div>
        ))}
        <button
          onClick={() =>
            setSlide(slide === 0 ? applications.length - 1 : slide - 1)
          }
          className='apps__btn apps__btn--left'
        >
          &larr;
        </button>
        <button
          onClick={() =>
            setSlide(slide === applications.length - 1 ? 0 : slide + 1)
          }
          className='apps__btn apps__btn--right'
        >
          &rarr;
        </button>
      </div>
    </Fragment>
  );
};

export default Applications;

/* 



*/
