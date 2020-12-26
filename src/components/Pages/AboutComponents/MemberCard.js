import React from 'react';

const MemberCard = ({
  image,
  name,
  role,
  experience,
  hobbies,
  linkedIn,
  linkedInIcon,
}) => {
  return (
    <div className='member'>
      <div className='member__image-container'>
        <img src={image} alt={`${name}, ${role}`} className='member__image' />
        <a className='member__linkedin_link' href={linkedIn}>
          <svg className='member__linkedin-icon' viewBox='0 0 24 24'>
            <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
          </svg>
        </a>
      </div>

      <div className='member__name'>{name}</div>
      <div className='member__role'>{role}</div>
      <div className='member__experience'>
        {experience.map((position, index) => (
          <div className='member__experience-container' key={index}>
            <div className='member__experience-title'>{position.title}</div>
            <div className='member__experience-location'>
              {position.location}
            </div>
          </div>
        ))}
        <div className='member__hobbies'>{hobbies}</div>
      </div>
    </div>
  );
};

export default MemberCard;
