import React, { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Components
import Loading from '../Components/Loading';
import JobApplication from './ApplyComponents/JobApplication';

// Importing all job application positions information
import { careers, application } from '../../data/database';

const { positions } = careers;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Apply = () => {
  const [applicationData, setApplicationData] = useState(positions[1]); // TESTING
  const [isLoading, setIsLoading] = useState(false);

  /*   const location = useLocation().pathname; // Get the current location as the url path
  const getJobId = (path) => path.substring(path.lastIndexOf('/') + 1); // Splice it into just the last item, i.e. the job ID
  const findJob = (id) => {
    return positions.find((position) => position._uid === id); // Find in the positions array, the job listing with the same ID as the ending item in the url path
  }; // Get the job posting from the db where the path matches the uid
  const job = findJob(getJobId(location));
  // Initialize state for the current job accessed as null
  const [isLoading, setIsLoading] = useState(false);
  const [applicationData] = useState(job); // Set state to the current job */

  /*   useEffect(() => {}, []); */

  let data = useLocation();
  console.log(data.state);

  useEffect(() => {
    /*    setApplicationData(data.state); */
  }, []);

  return (
    <div className='application'>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          {/* Banner */}
          <div className='application-banner'>
            <div className='position__container'>
              <div className='position__heading'>{applicationData.title}</div>
              <ul className='position__details'>
                <li className='position__area'>{applicationData.area}</li>
                <li className='position__location'>
                  {applicationData.location}
                </li>
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
              {applicationData.desiredQualifications.map(
                (qualification, index) => (
                  <li className='application-info__list-item' key={index}>
                    {qualification}
                  </li>
                )
              )}
            </ul>

            <h3 className='application-info__heading'>
              Required Qualifications
            </h3>
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
            <div className='application-info__text'>
              {applicationData.location}
            </div>
          </div>
        </Fragment>
      )}
      <JobApplication positions={positions} />
    </div>
  );
};

export default Apply;

/*     const newPosition = {
      _uid: 'JrWbDev1',
      title: 'Jr. Web Developer',
      area: 'Engineering',
      location: 'San Mateo, CA',
      timeCommitment: 'Part-time',
    };

    addPosition(newPosition); */
// Set state to the object of the specific job posting
//--1) location is the full url path
//--2) GetJobId uses location and is returned as the last item in the path
//--3) Then findJob uses that, which is the id, to find the job with that id, and returns all its information
