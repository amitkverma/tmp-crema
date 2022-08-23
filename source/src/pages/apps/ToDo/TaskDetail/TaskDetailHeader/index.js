import React from 'react';
import {useDispatch} from 'react-redux';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import {useNavigate} from 'react-router-dom';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import StatusToggleButton from './StatusToggleButton';
import AppsDeleteIcon from '../../../../../@crema/core/AppsDeleteIcon';
import {BiArrowBack} from 'react-icons/bi';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const TaskDetailHeader = (props) => {
  const {selectedTask} = props;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onChangeStarred = (checked) => {
    const task = selectedTask;
    task.isStarred = checked;
    dispatch(onUpdateSelectedTask(task));
  };

  const onDeleteTask = () => {
    const task = selectedTask;
    task.folderValue = 126;
    dispatch(onUpdateSelectedTask(task));
    navigate(-1);
  };

  return (
    <>
      <AppIconButton
        className='todo-detail-arrow'
        title={<IntlMessages id='common.back' />}
        onClick={onClickBackButton}
        icon={<BiArrowBack />}
      />

      <StatusToggleButton selectedTask={selectedTask} />

      <span className='todo-detail-header-star-icon'>
        <AppsStarredIcon item={selectedTask} onChange={onChangeStarred} />
      </span>

      <AppsDeleteIcon
        deleteAction={onDeleteTask}
        deleteTitle={<IntlMessages id='todo.deleteMessage' />}
        className='todo-detail-header-delete-icon'
      />
    </>
  );
};

export default TaskDetailHeader;

TaskDetailHeader.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
