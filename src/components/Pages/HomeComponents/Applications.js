import React, { useState, useEffect, Fragment } from 'react';
import Slider from './Slider';

const Applications = ({ heading, logo, applications }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      const newSlide = slide + 1;
      setSlide(newSlide);
    }, 1000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <Fragment>
      {/* <h1 className='applications__heading'>{heading}</h1> */}
      <div className='apps'>
        <div className='apps__heading-container'>
          <img className='apps__logo' src={`${logo}`} alt='' />
          <div className='apps__heading'>{heading}</div>
        </div>
        {/* Create an application for each object in the prop applications */}
        {applications.map((app, index) => (
          <div className='app'>
            <div
              className='app__container'
              style={{
                background: `linear-gradient(rgba(14, 58, 58, 0.4), rgba(0,0,0, 0.4)), url(${app.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                transform: `translateX(${(index - slide) * 100}%)`,
              }}
            >
              <div
                className='app__text'
                style={{
                  transform: `translateX(${(index - slide) * 100}%)`,
                  opacity: `${slide === index ? 1 : 0}`,
                }}
              >
                {app.text}
              </div>
            </div>
          </div>
        ))}
        <div
          onClick={() =>
            setSlide(slide === 0 ? applications.length - 1 : slide - 1)
          }
          className='apps__btn apps__btn--left'
        >
          &laquo;
        </div>
        <div
          onClick={() =>
            setSlide(slide === applications.length - 1 ? 0 : slide + 1)
          }
          className='apps__btn apps__btn--right'
        >
          &raquo;
        </div>
        <div className='apps__dots'>
          {applications.map((_, index) => (
            <div
              onClick={() => {
                setSlide(index);
              }}
              className={`apps__dot apps__dot--${
                slide === index ? 'active' : 'inactive'
              }`}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

/* 

linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url('https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png?v=c78bd457575a') no-repeat;

*/

export default Applications;

/* 



*/
