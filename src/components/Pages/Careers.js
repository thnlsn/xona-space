import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Components
import Loading from '../Components/Loading';

// Importing all data for this component from the database file
import { careers } from '../../data/database';

// Destructuring the data we need for this component
const { hero, benefits, availabilities } = careers;

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
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

const Careers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [availablePositions, setAvailablePositions] = useState([]);

  useEffect(() => {
    const readSpreadsheet = async () => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: `-----BEGIN PRIVATE KEY-----\n${PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`,
        }); // Authorize service account (if it stops working, try removing the \n characters above)

        setIsLoading(true);
        await doc.loadInfo(); // loads document properties and worksheets (all of them)
        const sheet = doc.sheetsById[SHEET_ID]; // loads the specific sheet we want to read (the available positions one)
        const rows = await sheet.getRows();
        setAvailablePositions(rows);
        setIsLoading(false);
      } catch (error) {
        console.error('Error: ', error);
        return [];
      }
    };
    readSpreadsheet();
  }, []);

  return (
    <div className='careers'>
      <div
        className='careers-banner'
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
        }}
      >
        <div className='careers-banner__heading'>{hero.heading}</div>
        <div className='careers-banner__heading careers-banner__heading--sub'>
          {hero.subHeading}
        </div>
      </div>
      <div className='benefits'>
        {benefits.map((benefit, index) => (
          <div className='benefits__item' key={index}>
            <ion-icon name={benefit.icon}></ion-icon>
            <div className='benefits__heading'>{benefit.heading}</div>
            <div className='benefits__description'>{benefit.text}</div>
          </div>
        ))}
      </div>
      <div className='availabilities'>
        <div className='availabilities__heading'>{availabilities.heading}</div>
        <div className='availabilities__positions'>
          {isLoading ? (
            <Loading />
          ) : (
            availablePositions.map((position, index) => (
              <summary className='position' key={index}>
                <div className='position__container'>
                  <div className='position__heading'>{position.title}</div>
                  <ul className='position__details'>
                    <li className='position__area'>{position.area}</li>
                    <li className='position__location'>{position.location}</li>
                    <li className='position__time-commitment'>
                      {position.timeCommitment}
                    </li>
                  </ul>
                </div>
                {console.log(position)}
                <Link
                  to={{
                    pathname: `careers/${position._uid}`,
                    state: {
                      title: position.title,
                      area: position.area,
                      location: position.location,
                      timeCommitment: position.timeCommitment,
                      description: position.description,
                      desiredQualifications: position.desiredQualifications,
                      requiredQualifications: position.requiredQualifications,
                    },
                  }}
                  className='btn btn--basic'
                  rel='noopener noreferrer'
                >
                  {availabilities.buttonText}
                </Link>
              </summary>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
