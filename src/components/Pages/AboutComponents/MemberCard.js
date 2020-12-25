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
      <img src={image} alt={`${name}, ${role}`} className='member__image' />
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
