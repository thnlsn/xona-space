import React from 'react';

import Article from '../Components/Article';

// The news data is stored in home because home initially needed the data to display the 4 most recent news articles, and so all the news data is there
import { home } from '../../data/database';

// Destructure only what we need for this page
const {
  news: { newsArchiveHeading, articles },
} = home;

const News = () => {
  return (
    <div className='news-archive'>
      <h1 className='news-archive__heading'>{newsArchiveHeading}</h1>
      <div className='archive'>
        {articles.map((article, index) => (
          <Article
            date={article.date}
            image={article.image}
            title={article.title}
            description={article.description}
            url={article.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
