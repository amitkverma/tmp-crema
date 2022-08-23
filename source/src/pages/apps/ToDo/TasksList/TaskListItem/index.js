import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Labels from './Labels';
import Priority from './Priority';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {Avatar, Checkbox} from 'antd';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {AiOutlineDelete} from 'react-icons/ai';
import {MdLabelOutline} from 'react-icons/md';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import {useDispatch} from 'react-redux';

const TaskListItem = ({
  task,
  onChangeCheckedTasks,
  checkedTasks,
  onChangeStarred,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {name} = useParams();

  const onViewTaskDetail = (task) => {
    navigate(`/apps/todo/${name}/${task.id}`);
  };

  const onDeleteTask = () => {
    task.folderValue = 126;
    dispatch(onUpdateSelectedTask(task));
  };

  return (
    <div
      key={task.id}
      className={clsx('todo-list-item item-hover', {
        checked: checkedTasks.includes(task.id),
      })}
      onClick={() => onViewTaskDetail(task)}>
      <div className='todo-list-item-left'>
        <span
          className='todo-list-checkbox-view'
          onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedTasks.includes(task.id)}
            onChange={(event) => onChangeCheckedTasks(event, task.id)}
            color='primary'
          />
        </span>

        <div className='todo-list-img-view'>
          <span
            className='todo-list-star-view'
            onClick={(event) => event.stopPropagation()}>
            <AppsStarredIcon item={task} onChange={onChangeStarred} />
          </span>
          <span className='todo-list-img'>
            <Avatar src={task?.assignedTo?.image} />
          </span>
        </div>

        <span className='text-truncate todo-list-title'>{task.title}</span>

        {task.priority ? (
          <span className='todo-list-item-hide'>
            <Priority priority={task.priority} />
          </span>
        ) : null}
      </div>

      <div className='todo-list-item-right'>
        {task.label ? <Labels labels={task.label} /> : null}

        <div className='todo-list-item-right-content'>
          <span className='todo-list-item-hide text-truncate todo-list-startDate'>
            <IntlMessages id='todo.scheduleFor' /> {task.startDate}
          </span>
        </div>

        <div className='todo-list-item-action'>
          <AppIconButton
            onClick={onDeleteTask}
            title={<IntlMessages id='common.delete' />}
            icon={<AiOutlineDelete />}
          />

          <AppIconButton
            title={<IntlMessages id='common.label' />}
            icon={<MdLabelOutline />}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskListItem;

TaskListItem.defaultProps = {
  checkedTasks: [],
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  onChangeCheckedTasks: PropTypes.func,
  checkedTasks: PropTypes.array,
  onChangeStarred: PropTypes.func,
  match: PropTypes.object,
};
