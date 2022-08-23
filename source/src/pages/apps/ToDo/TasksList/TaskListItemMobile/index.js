import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Priority from './Priority';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {Avatar} from 'antd';
import './index.style.less';
import moment from 'moment';
import {CheckOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

const TaskListItemMobile = ({
  task,
  checkedTasks,
  onChangeCheckedTasks,
  match,
  onChangeStarred,
}) => {
  const navigate = useNavigate();

  const onViewTaskDetail = (task) => {
    navigate(`/apps/todo/${match.params.name}/${task.id}`);
  };

  return (
    <div
      key={task.id}
      className={clsx('todo-list-mobile-item item-hover', {
        checked: checkedTasks.includes(task.id),
      })}
      onClick={() => onViewTaskDetail(task)}>
      <div className='todo-list-mobile-main-content'>
        <div
          className={clsx('todo-list-mobile-view', {
            checked: checkedTasks.includes(task.id),
          })}
          onClick={(event) => {
            event.stopPropagation();
            onChangeCheckedTasks(!checkedTasks.includes(task.id), task.id);
          }}>
          {checkedTasks.includes(task.id) ? (
            <CheckOutlined />
          ) : (
            <Avatar
              className='todo-list-mobile-avatar'
              src={task?.assignedTo?.image}
            />
          )}
        </div>

        <div className='todo-list-mobile-content'>
          <span className='todo-list-mobile-title'>
            <span className='text-truncate'>{task.title}</span>

            {task.priority ? (
              <span className='todo-list-mobile-priority'>
                <Priority priority={task.priority} />
              </span>
            ) : null}
          </span>
          <p className='text-truncate '>{task.content}</p>
        </div>
      </div>

      <div className='todo-list-mobile-action'>
        <span className='todo-list-mobile-date'>
          {moment(task.startDate).format('HH:mm A')}
        </span>
        <span
          className='todo-list-star-mobile'
          onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon item={task} onChange={onChangeStarred} />
        </span>
      </div>
    </div>
  );
};

export default TaskListItemMobile;

TaskListItemMobile.defaultProps = {
  checkedTasks: [],
};

TaskListItemMobile.propTypes = {
  task: PropTypes.object.isRequired,
  checkedTasks: PropTypes.array,
  onChangeStarred: PropTypes.func,
  match: PropTypes.object,
  onChangeCheckedTasks: PropTypes.func,
};
