import React from 'react';

const JobApplication = ({ positions }) => {
  return (
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
              placeholder='(xxx) xxx-xxxx'
              id='phone-number'
              /*               pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' */
            />
          </div>
        </div>

        {/* Position Input */}
        {/* <div className='application-form__input-group'>
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
        </div> */}

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
          <div className='application-form__radio-group'>
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
              &nbsp; Yes
            </label>
          </div>
          <div className='application-form__radio-group'>
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
              &nbsp; No
            </label>
          </div>
        </div>

        {/* How did you hear about us Textare Input */}
        <div className='application-form__input-group application-form__input-group--textarea'>
          <label
            htmlFor='hear-about-xona'
            className='application-form__label application-form__label--textarea'
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
          <label
            htmlFor='achievement'
            className='application-form__label application-form__label--textarea'
          >
            Please tell us, in a few sentences, about the most impressive thing
            that you have built or achieved. This can be in relation to work,
            school, external activities, etc. If you are describing a team
            effort or group project, please be specific about your personal
            contribution. {''}
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
            className='application-form__label application-form__label--textarea'
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
            className='application-form__label application-form__label--textarea'
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
  );
};

export default JobApplication;
