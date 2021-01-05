import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Components
import Loading from '../Components/Loading';
import Article from '../Components/Article';

// The news data is stored in home because home initially needed the data to display the 4 most recent news articles, and so all the news data is there
import { home } from '../../data/database';

// Destructure only what we need for this page
const {
  news: { newsArchiveHeading /* articles */ },
} = home;

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID_NEWS;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(
  /\\n/g,
  '\n'
); // Replace all the newline characters so they aren't actually in the key

// Initializing the sheet with the spreadsheet ID (The specific sheet)
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const News = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const readSpreadsheet = async () => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: `-----BEGIN PRIVATE KEY-----\n${PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`,
        }); // Authorize service account (if it stops working, try removing the \n characters above)

        // If there are no rows ADD A CONDITON FOR THIS AND MAKE IT SAY THERE ARE NO POSITONS AVALALBE AT THE MOMENT
        setIsLoading(true);
        await doc.loadInfo(); // loads document properties and worksheets (all of them)
        const sheet = doc.sheetsById[SHEET_ID]; // loads the specific sheet we want to read (the available positions one)
        const rows = await sheet.getRows();

        setArticles(rows);
        setIsLoading(false);
      } catch (error) {
        console.error('Error: ', error);
        return [];
      }
    };
    readSpreadsheet();
  }, []);

  return (
    <div className='news-archive'>
      <h1 className='news-archive__heading'>{newsArchiveHeading}</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
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
          <Link
            to={'/xona-space'}
            className='btn btn__arrow u-horizontal-margins-medium'
            data-aos='fade'
          >
            <span className='btn__arrow--larr'>&larr;</span> Go home
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default News;

// Above component start

/* const readSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: `-----BEGIN PRIVATE KEY-----\n${PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`,
    }); // Authorize service account (if it stops working, try removing the \n characters above)

    // If there are no rows ADD A CONDITON FOR THIS AND MAKE IT SAY THERE ARE NO POSITONS AVALALBE AT THE MOMENT
    await doc.loadInfo(); // loads document properties and worksheets (all of them)
    const sheet = doc.sheetsById[SHEET_ID]; // loads the specific sheet we want to read (the available positions one)
    console.log(sheet.title);

    const result = await sheet.addRows(row);

    const rows = await sheet.getRows();
    console.log(rows);

  } catch (error) {
    console.error('Error: ', error);
    return [];
  }
};

const newRow = {
  date: 'May 16, 2019',
  image: 'May 16, 2019',
  title: 'Seraphim Spacecamp Launches Mission 3',
  description:
    'Xona Space Systems is announced as one of the 7 participating startups in the Seraphim Space Camp',
  url:
    'https://www.spacecamp.vc/insight/news/seraphim-space-camp-launches-mission-3?utm_content=buffer2c596&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer',
};

readSpreadsheet(articles); */
