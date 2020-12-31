import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importing all job application positions information
import { careers, application } from '../../data/database';

const { positions } = careers;

// This component needs the ID of the job.
// With that, it will find the job with the matching ID and display the application questions, etc.

const Apply = () => {
  // Get the current location as the url path
  const location = useLocation().pathname;
  // Splice it into just the last item, i.e. the job ID
  const getJobId = (path) => path.substring(path.lastIndexOf('/') + 1);

  const findJob = (id) => {
    // Find in the positions array, the job listing with the same ID as the ending item in the url path
    return positions.find((position) => position._uid === id);
  };

  // Initialize state for the current job accessed as null
  const [applicationData, setApplicationData] = useState(
    findJob(getJobId(location))
  );

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
        {applicationData.description.map((paragraph) => (
          <div className='application-info__paragraph'>{paragraph}</div>
        ))}
      </div>
      {/* Application */}
      <div className='job-application'>
        <form action='#' className='application-form'>
          <h2 className='application-form__heading'>Application</h2>
          {/* Resume Input */}
          <div className='application-form__input-group'>
            <label htmlFor='resume' className='application-form__label'>
              Resume
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
              Full name
            </label>
            <input
              type='text'
              className='application-form__input'
              placeholder='Full name'
              id='full-name'
            />
          </div>

          {/* Email Input */}
          <div className='application-form__input-group'>
            <label htmlFor='email' className='application-form__label'>
              Email
            </label>
            <input
              type='email'
              className='application-form__input'
              placeholder='Email'
              id='email'
            />
          </div>

          {/* Phone Number Input */}
          <div className='application-form__input-group'>
            <label htmlFor='phone-number' className='application-form__label'>
              Phone
            </label>
            <input
              type='tel'
              className='application-form__input'
              placeholder='Phone number'
              id='phone-number'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
            />
          </div>

          <h3 className='application-form__sub-heading'>Links</h3>

          {/* LinkedIn Input */}
          <div className='application-form__input-group'>
            <label htmlFor='linked-in' className='application-form__label'>
              LinkedIn URL
            </label>
            <input
              type='text'
              className='application-form__input'
              placeholder='LinkedIn link'
              id='linked-in'
            />
          </div>

          {/* Portfolio Input */}
          <div className='application-form__input-group'>
            <label htmlFor='portfolio' className='application-form__label'>
              Portfolio URL
            </label>
            <input
              type='text'
              className='application-form__input'
              placeholder='Portfolio link'
              id='portfolio'
            />
          </div>

          {/* Other Website Input */}
          <div className='application-form__input-group'>
            <label htmlFor='other-website' className='application-form__label'>
              Other website
            </label>
            <input
              type='text'
              className='application-form__input'
              placeholder='Link'
              id='other-website'
            />
          </div>

          <h3 className='application-form__sub-heading'>General Questions</h3>

          {/* Radio Visa Sponsorship Input */}
          <div className='application-form__question'>
            Do you require U.S. visa sponsorship? {''}
            <span className='application-form__required'>*</span>
          </div>

          <div className='application-form__input-group'>
            <input
              type='radio'
              name='visa-sponsorship'
              className='application-form__input'
              id='visa-sponsorship-yes'
              value='yes'
            />
            <label
              htmlFor='visa-sponsorship'
              className='application-form__label'
            >
              Yes
            </label>
            <input
              type='radio'
              name='visa-sponsorship'
              className='application-form__input'
              id='visa-sponsorship-no'
              value='no'
            />
            <label
              htmlFor='visa-sponsorship'
              className='application-form__label'
            >
              No
            </label>
          </div>

          {/* How did you hear about us Textare Input */}
          <div className='application-form__input-group application-form__input-group--textarea'>
            <label htmlFor='message' className='form__label'>
              How did you hear about Xona Space Systems? {''}
              <span className='application-form__required'>*</span>
            </label>
            <div className='contact-form__input-box'>
              <textarea
                type='text'
                className='contact-form__input'
                placeholder='Answer'
                id='message'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
