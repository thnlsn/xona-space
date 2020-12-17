import React, { Fragment } from 'react';

const Articles = ({ news }) => {
  return (
    <Fragment>
      <h1 className='news__heading'>News</h1>
      <div className='articles'>
        <div className='article'>Article 1</div>

        <div className='article'>Article 2</div>

        <div className='article'>Article 3</div>

        <div className='article'>Article 4</div>
      </div>
    </Fragment>
  );
};

export default Articles;
