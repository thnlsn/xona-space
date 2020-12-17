import React, { Fragment } from 'react';

const Articles = () => {
  return (
    <Fragment>
      <h1 className='news__heading'>News</h1>
      <div className='articles'>
        <div className='articles__article'>Article 1</div>

        <div className='articles__article'>Article 2</div>

        <div className='articles__article'>Article 3</div>

        <div className='articles__article'>Article 4</div>
      </div>
    </Fragment>
  );
};

export default Articles;
