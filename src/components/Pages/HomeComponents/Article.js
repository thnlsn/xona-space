import React from 'react';

const Article = ({ date, image, title, description, url }) => {
  return (
    <div className='article' data-aos='fade-up'>
      <div className='article__date'>{date}</div>
      <img src={image} alt='Article' className='article__image' />
      <div className='article__title'>{title}</div>
      <div className='article__description'>{description}</div>

      <a href={url} className='btn' target='_blank' rel='noopener noreferrer'>
        Read more
      </a>
    </div>
  );
};

export default Article;
