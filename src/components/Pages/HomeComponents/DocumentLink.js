import React, { Fragment } from 'react';

const DocumentLink = ({ text, url, explanation }) => {
  return (
    <Fragment>
      <a
        className='main-quote__heading'
        href={url}
        target='_blank'
        rel='noopener noreferrer' // For security purposes
      >
        {text}
        <span className='main-quote__rarr'>&rarr;</span>
      </a>
      <div className='main-quote__text'>{explanation}</div>
    </Fragment>
  );
};

export default DocumentLink;
