import React, {useEffect} from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {onGetSelectedTask} from '../../../../redux/actions/ToDoApp';
import {useParams} from 'react-router-dom';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import './index.style.less';

const TaskDetail = () => {
  const dispatch = useDispatch();

  const {id} = useParams();
  useEffect(() => {
    dispatch(onGetSelectedTask(id));
  }, [dispatch, id]);

  const selectedTask = useSelector(({todoApp}) => todoApp.selectedTask);
  if (!selectedTask) {
    return null;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader selectedTask={selectedTask} />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody selectedTask={selectedTask} />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
