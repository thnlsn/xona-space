import React, { Fragment } from 'react';

const Members = () => {
  return (
    <Fragment>
      <div className='xona-team__heading'>We are Xona</div>
      <div className='xona-team__members'>
        {members.map((member) => (
          <div className='member'>
            <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              className='member__image'
            />
            <div className='member__name'>{member.name}</div>
            <div className='member__role'>{member.role}</div>
            <div className='member__experience'>
              {member.experience.map((position) => (
                <div className='member__experience-container'>
                  <div className='member__experience-title'>
                    {position.title}
                  </div>
                  <div className='member__experience-location'>
                    {position.location}
                  </div>
                </div>
              ))}
              <div className='member__hobbies'>{member.hobbies}</div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Members;
