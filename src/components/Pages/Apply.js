import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Importing all job application positions information
import { careers, application } from '../../data/database';

const { positions } = careers;

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(
  /\\n/g,
  '\n'
); // Replace all the newline characters so they aren't actually in the key

console.log(PRIVATE_KEY);

// Initializing the sheet with the spreadsheet ID
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const addPosition = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      // Sanitizing the key removed the begin and end markers, so we add that back into the string
      private_key: `-----BEGIN PRIVATE KEY-----${PRIVATE_KEY}-----END PRIVATE KEY-----`,
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    console.log(doc.title);

    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
    console.log(sheet.title);
    console.log(sheet.rowCount);

    const rows = await sheet.getRows();
    console.log(rows);
  } catch (error) {
    console.error('Error: ', error);
  }
};

const newPosition = {
  _uid: 'JrWbDev1',
  title: 'Jr. Web Developer',
  area: 'Engineering',
  location: 'San Mateo, CA',
  timeCommitment: 'Part-time',
};

addPosition(newPosition);

const Apply = () => {
  // Get the current location as the url path
  const location = useLocation().pathname;
  // Splice it into just the last item, i.e. the job ID
  const getJobId = (path) => path.substring(path.lastIndexOf('/') + 1);

  const findJob = (id) => {
    // Find in the positions array, the job listing with the same ID as the ending item in the url path
    return positions.find((position) => position._uid === id);
  };

  // Get the job posting from the db where the path matches the uid
  const job = findJob(getJobId(location));

  // Initialize state for the current job accessed as null
  const [applicationData, setApplicationData] = useState(positions[1]);

  useEffect(() => {
    // Set state to the object of the specific job posting
    //--1) location is the full url path
    //--2) GetJobId uses location and is returned as the last item in the path
    //--3) Then findJob uses that, which is the id, to find the job with that id, and returns all its information
  }, []);

  return (
    <div className='application'>
      {/* Banner */}
      <div className='application-banner'>
        <div className='position__container'>
          <div className='position__heading'>{applicationData.title}</div>
          <ul className='position__details'>
            <li className='position__area'>{applicationData.area}</li>
            <li className='position__location'>{applicationData.location}</li>
            <li className='position__time-commitment'>
              {applicationData.timeCommitment}
            </li>
          </ul>
        </div>
      </div>

      {/* Info */}
      <div className='application-info'>
        <div className='application-info__paragraphs'>
          {applicationData.description.map((paragraph, index) => (
            <div className='application-info__paragraph' key={index}>
              {paragraph}
            </div>
          ))}
        </div>

        <h3 className='application-info__heading'>
          Desired Qualifications (not all are expected)
        </h3>
        <ul className='application-info__qualifications-list'>
          {applicationData.desiredQualifications.map((qualification, index) => (
            <li className='application-info__list-item' key={index}>
              {qualification}
            </li>
          ))}
        </ul>

        <h3 className='application-info__heading'>Required Qualifications</h3>
        <ul className='application-info__qualifications-list'>
          {applicationData.requiredQualifications.map(
            (qualification, index) => (
              <li className='application-info__list-item' key={index}>
                {qualification}
              </li>
            )
          )}
        </ul>

        <h3 className='application-info__heading'>Location</h3>
        <div className='application-info__text'>{applicationData.location}</div>
      </div>

      {/* Application */}
      <div className='job-application'>
        <form action='#' className='application-form'>
          <h2 className='application-form__heading'>Application</h2>
          {/* Resume Input */}
          <div className='application-form__input-group'>
            <label htmlFor='resume' className='application-form__label'>
              Resume <span className='application-form__required'>*</span>
            </label>
            <input
              type='file'
              className='application-form__file'
              placeholder='Attach Resume +'
              id='resume'
            />
          </div>

          {/* Full Name Input */}
          <div className='application-form__input-group'>
            <label htmlFor='full-name' className='application-form__label'>
              Full name <span className='application-form__required'>*</span>
            </label>
            <div className='application-form__input-box'>
              <input
                type='text'
                className='application-form__input'
                placeholder='Full name'
                id='full-name'
              />
            </div>
          </div>

          {/* Email Input */}
          <div className='application-form__input-group'>
            <label htmlFor='email' className='application-form__label'>
              Email <span className='application-form__required'>*</span>
            </label>
            <div className='application-form__input-box'>
              <input
                type='email'
                className='application-form__input'
                placeholder='Email'
                id='email'
              />
            </div>
          </div>

          {/* Phone Number Input */}
          <div className='application-form__input-group'>
            <label htmlFor='phone-number' className='application-form__label'>
              Phone <span className='application-form__required'>*</span>
            </label>
            <div className='application-form__input-box'>
              <input
                type='tel'
                className='application-form__input'
                placeholder='Phone number'
                id='phone-number'
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              />
            </div>
          </div>

          {/* Position Input */}
          <div className='application-form__input-group'>
            <label htmlFor='position' className='application-form__label'>
              Position <span className='application-form__required'>*</span>
            </label>
            <select
              className='application-form__input-select'
              id='position'
              name='position'
            >
              {positions.map((position, index) => (
                <option value={position.title} key={index}>
                  {position.title}
                </option>
              ))}
            </select>
          </div>

          <h3 className='application-form__sub-heading'>Links</h3>

          {/* LinkedIn Input */}
          <div className='application-form__input-group'>
            <label htmlFor='linked-in' className='application-form__label'>
              LinkedIn URL
            </label>
            <div className='application-form__input-box'>
              <input
                type='text'
                className='application-form__input'
                placeholder='LinkedIn link'
                id='linked-in'
              />
            </div>
          </div>

          {/* Portfolio Input */}
          <div className='application-form__input-group'>
            <label htmlFor='portfolio' className='application-form__label'>
              Portfolio URL
            </label>
            <div className='application-form__input-box'>
              <input
                type='text'
                className='application-form__input'
                placeholder='Portfolio link'
                id='portfolio'
              />
            </div>
          </div>

          {/* Other Website Input */}
          <div className='application-form__input-group'>
            <label htmlFor='other-website' className='application-form__label'>
              Other website
            </label>
            <div className='application-form__input-box'>
              <input
                type='text'
                className='application-form__input'
                placeholder='Link'
                id='other-website'
              />
            </div>
          </div>

          <h3 className='application-form__sub-heading'>General Questions</h3>

          {/* Radio Visa Sponsorship Input */}
          <div className='application-form__question'>
            Do you require U.S. visa sponsorship? {''}
            <span className='application-form__required'>*</span>
          </div>

          <div className='application-form__input-group application-form__input-group--radio'>
            <input
              type='radio'
              name='visa-sponsorship'
              className='application-form__input-radio'
              id='visa-sponsorship-yes'
              value='yes'
            />
            <label
              htmlFor='visa-sponsorship-yes'
              className='application-form__label'
            >
              Yes
            </label>
            <input
              type='radio'
              name='visa-sponsorship'
              className='application-form__input-radio'
              id='visa-sponsorship-no'
              value='no'
            />
            <label
              htmlFor='visa-sponsorship-no'
              className='application-form__label'
            >
              No
            </label>
          </div>

          {/* How did you hear about us Textare Input */}
          <div className='application-form__input-group application-form__input-group--textarea'>
            <label
              htmlFor='hear-about-xona'
              className='application-form__label'
            >
              How did you hear about Xona Space Systems? {''}
              <span className='application-form__required'>*</span>
            </label>
            <div className='application-form__input-box'>
              <textarea
                className='application-form__input'
                placeholder='Answer'
                id='hear-about-xona'
              />
            </div>
          </div>

          {/* How did you hear about us Textare Input */}
          <div className='application-form__input-group application-form__input-group--textarea'>
            <label htmlFor='achievement' className='application-form__label'>
              Please tell us, in a few sentences, about the most impressive
              thing that you have built or achieved. This can be in relation to
              work, school, external activities, etc. If you are describing a
              team effort or group project, please be specific about your
              personal contribution. {''}
              <span className='application-form__required'>*</span>
            </label>
            <div className='application-form__input-box'>
              <textarea
                className='application-form__input'
                placeholder='Answer'
                id='achievement'
              />
            </div>
          </div>

          {/* How did you hear about us Textare Input */}
          <div className='application-form__input-group application-form__input-group--textarea'>
            <label
              htmlFor='three-activities'
              className='application-form__label'
            >
              List three activities you enjoy doing: {''}
              <span className='application-form__required'>*</span>
            </label>
            <div className='application-form__input-box u-height-small'>
              <textarea
                className='application-form__input'
                placeholder='Answer'
                id='three-activities'
              />
            </div>
          </div>

          {/* How did you hear about us Textare Input */}
          <div className='application-form__input-group application-form__input-group--textarea'>
            <label
              htmlFor='additional-info'
              className='application-form__label'
            >
              Additional information:
            </label>
            <div className='application-form__input-box'>
              <textarea
                className='application-form__input'
                placeholder='Add a cover letter or anything else you want to share.'
                id='additional-info'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
