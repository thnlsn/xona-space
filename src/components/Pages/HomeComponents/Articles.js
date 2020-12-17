import React, { Fragment } from 'react';
import Article from './Article';

const Articles = ({ news }) => {
  return (
    <Fragment>
      <h1 className='news__heading'>News</h1>
      <div className='articles'>
        {() => {
          let articles = null;
        }}

        <Article
          date={article.date}
          image={article.image}
          title={article.title}
          description={article.description}
          key={index}
        />
      </div>
    </Fragment>
  );
};

export default Articles;
