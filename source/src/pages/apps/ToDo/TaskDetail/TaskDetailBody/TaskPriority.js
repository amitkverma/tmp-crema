import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from 'antd';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {onUpdateSelectedTask} from '../../../../../redux/actions';

const TaskPriority = ({selectedTask}) => {
  const dispatch = useDispatch();
  const priorityList = useSelector(({todoApp}) => todoApp.priorityList);

  const onChangePriority = (value) => {
    selectedTask.priority = priorityList.find(
      (priority) => priority.type === value,
    );
    dispatch(onUpdateSelectedTask(selectedTask));
  };

  const {messages} = useIntl();
  return (
    <Select
      className='todo-detail-select-box'
      defaultValue={selectedTask.priority?.type}
      placeholder={messages['common.priority']}
      onChange={(value) => onChangePriority(value)}>
      {priorityList.map((priority) => {
        return (
          <Select.Option key={priority.id} value={priority.type}>
            {priority.name}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default TaskPriority;

TaskPriority.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
