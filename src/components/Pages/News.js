import React from 'react';

import Article from '../Components/NewsArticle';

// The news data is stored in home because home initially needed the data to display the 4 most recent news articles, and so all the news data is there
import { home } from '../../data/database';

// Destructure only what we need for this page
const {
  news: { newsArchiveHeading, articles },
} = home;

const News = () => {
  return (
    <div className='news'>
      <h1 className='home-heading heading-primary'>{newsArchiveHeading}</h1>
      <svg className='scroll-indicator' viewBox='0 0 20 10' width='4rem'>
        <path d='M0 0 L10 10 L20 0'></path>
      </svg>
    </div>
  );
};

export default News;
