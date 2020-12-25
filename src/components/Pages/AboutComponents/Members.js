import React, { Fragment } from 'react';
import Member from './MemberCard';

const Members = ({ members }) => {
  return (
    <Fragment>
      <div className='xona-team__heading'>We are Xona</div>
      <div className='xona-team__members'>
        {members.map((member, index) => (
          <Member
            image={member.image}
            name={member.name}
            role={member.role}
            experience={member.experience}
            hobbies={member.hobbies}
            linkedIn={member.linkedIn}
            key={index}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Members;
