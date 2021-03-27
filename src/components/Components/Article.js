import React from 'react';

const Article = ({ date, image, title, description, url }) => {
  return (
    <article className='article'>
      <div className='article__date'>{date}</div>
      <img src={image} alt='Article' className='article__image' />
      <div className='article__title'>{title}</div>
      <div className='article__description'>{description}</div>

      <a
        href={url}
        className='btn btn--basic'
        target='_blank'
        rel='noopener noreferrer'
      >
        Read more
      </a>
    </article>
  );
};

export default Article;
