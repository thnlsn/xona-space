import React, { Fragment } from 'react';
import Article from './Article';

const Articles = ({ heading, articles }) => {
  return (
    <Fragment>
      <h1 className='news__heading'>{heading}</h1>
      <div className='articles'>
        {(() => {
          let articlesArr = [];
          for (let i = 0; i < 4; i++) {
            console.log(articles[i]);
            articlesArr.push(
              <Article
                date={articles[i].date}
                image={articles[i].image}
                title={articles[i].title}
                description={articles[i].description}
                key={i}
              />
            );
          }
          return articlesArr;
        })()}
        {/* 
        <Article
          date={article.date}
          image={article.image}
          title={article.title}
          description={article.description}
          key={index}
        /> */}
      </div>
    </Fragment>
  );
};

export default Articles;
