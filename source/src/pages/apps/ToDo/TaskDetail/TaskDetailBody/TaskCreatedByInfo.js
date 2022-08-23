import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

const TaskCreatedByInfo = ({createdBy, createdOn}) => {
  return (
    <div className='todo-task-cr-by-info'>
      {createdBy.image ? (
        <Avatar src={createdBy.image} className='todo-avatar-30' />
      ) : (
        <Avatar className='todo-avatar-30 todo-avatar-name'>
          {createdBy.name[0]}
        </Avatar>
      )}
      <div className='todo-task-cr-by-info-content'>
        <span className='todo-cr-by-name'>{createdBy.name}</span>
        <p className='mb-0'>
          <span>
            <IntlMessages id='todo.createdThisTask' />
          </span>
          <span className='todo-cr-on'>{createdOn}</span>
        </p>
      </div>
    </div>
  );
};

export default TaskCreatedByInfo;

TaskCreatedByInfo.propTypes = {
  createdBy: PropTypes.object.isRequired,
  createdOn: PropTypes.string.isRequired,
};
