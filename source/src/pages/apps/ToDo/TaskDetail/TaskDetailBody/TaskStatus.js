import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from 'antd';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {onUpdateSelectedTask} from '../../../../../redux/actions';

const TaskStatus = ({selectedTask}) => {
  const statusList = useSelector(({todoApp}) => todoApp.statusList);

  const dispatch = useDispatch();

  const onChangeStatus = (value) => {
    selectedTask.status = value;
    dispatch(onUpdateSelectedTask(selectedTask));
  };

  const {messages} = useIntl();

  return (
    <Select
      className='todo-detail-select-box'
      onChange={(value) => onChangeStatus(value)}
      value={selectedTask.status}
      placeholder={messages['common.status']}>
      {statusList.map((status) => {
        return (
          <Select.Option key={status.type} value={status.type}>
            {status.name}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default TaskStatus;

TaskStatus.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
