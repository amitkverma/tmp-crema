import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {onUpdateSelectedTask} from '../../../../../redux/actions/ToDoApp';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {CheckOutlined} from '@ant-design/icons';

const StatusToggleButton = ({selectedTask}) => {
  const dispatch = useDispatch();

  const onChangeTaskStatus = (status) => {
    const task = selectedTask;
    task.status = status;
    dispatch(onUpdateSelectedTask(task));
  };

  return (
    <>
      {selectedTask.status === 3 ? (
        <span
          className='todo-detail-status-btn bg-color'
          onClick={() => onChangeTaskStatus(1)}>
          <CheckOutlined className='check-icon' />
          <IntlMessages id='todo.completed' />
        </span>
      ) : (
        <span
          className='todo-detail-status-btn'
          onClick={() => onChangeTaskStatus(3)}>
          <CheckOutlined className='check-icon' />
          <IntlMessages id='todo.markAsCompleted' />
        </span>
      )}
    </>
  );
};

export default StatusToggleButton;

StatusToggleButton.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
