import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

const AssignedStaff = ({assignedStaff}) => {
  return (
    <>
      {assignedStaff ? (
        <div className='todo-assigned-staff'>
          {assignedStaff.image ? (
            <Avatar className='todo-avatar-36' src={assignedStaff.image} />
          ) : (
            <Avatar className='todo-avatar-36 todo-avatar-name'>
              {assignedStaff?.name.charAt(0)}
            </Avatar>
          )}
          <div className='todo-assigned-staff-info'>
            <p>
              <IntlMessages id='todo.assignedTo' />
            </p>
            <p className='todo-assigned-staff-title'>{assignedStaff.name}</p>
          </div>
        </div>
      ) : (
        <div className='todo-assigned-staff'>
          <Avatar
            className='todo-avatar-36'
            src={'/assets/images/placeholder.jpg'}
          />
          <div className='todo-assigned-staff-info'>
            <p className='todo-assigned-staff-title'>
              <IntlMessages id='todo.currentlyUnassigned' />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignedStaff;

AssignedStaff.defaultProps = {
  assignedStaff: null,
};

AssignedStaff.propTypes = {
  assignedStaff: PropTypes.object,
};
