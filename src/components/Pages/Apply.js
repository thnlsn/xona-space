import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component needs the ID of the job.
// With that, it will find the job with the matching ID and display the application questions, etc.

const Apply = () => {
  const location = useLocation().pathname;
  const getJobId = (path) => path.substring(path.lastIndexOf('/') + 1);

  const [applicationData, setApplicationData] = useState();

  useEffect(() => {
    setApplicationData(getJobId(location));
  }, []);

  return <div className='apply'></div>;
};

export default Apply;
