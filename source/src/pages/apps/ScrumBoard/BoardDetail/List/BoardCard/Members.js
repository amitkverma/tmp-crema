import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Tooltip} from 'antd';

const Members = (props) => {
  const {members} = props;

  return (
    <div className='scrum-board-member'>
      {members.map((member) => {
        return (
          <Tooltip title={member.name} key={member.id}>
            {member.image ? (
              <Avatar
                className='scrum-board-member-avatar'
                src={member.image}
                alt='created'
              />
            ) : (
              <Avatar className='scrum-board-member-avatar'>
                {member.name[0].toUpperCase()}
              </Avatar>
            )}
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Members;

Members.propTypes = {
  members: PropTypes.array.isRequired,
};
