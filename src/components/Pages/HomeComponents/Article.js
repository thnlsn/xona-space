import React from 'react';

const Article = ({ date, image, title, description }) => {
  return (
    <div className='article'>
      <div className='article__date'>{date}</div>
      <div className='article__image'>{image}</div>
      <div className='article__title'>{title}</div>
      <div className='article__description'>{description}</div>
    </div>
  );
};

export default Article;
