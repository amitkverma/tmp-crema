import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  onGetTaskList,
  onUpdateTaskStarredStatus,
} from '../../../../redux/actions/ToDoApp';
import TaskContentHeader from './TaskContentHeader';
import TaskListItem from './TaskListItem';
import TaskCalender from './TaskCalendar';
import {useLocation} from 'react-router-dom';
import AddNewTask from '../AddNewTask';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsFooter from '../../../../@crema/core/AppsContainer/AppsFooter';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import TodoListSkeleton from '../../../../@crema/core/AppSkeleton/TodoListSkeleton';
import AppList from '../../../../@crema/core/AppList';
import './index.style.less';
import TaskListItemMobile from './TaskListItemMobile';

const TasksList = () => {
  const dispatch = useDispatch();

  const {pathname} = useLocation();

  const taskList = useSelector(({todoApp}) => todoApp.taskList);

  const totalTasks = useSelector(({todoApp}) => todoApp.totalTasks);

  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const loading = useSelector(({common}) => common.loading);

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [checkedTasks, setCheckedTasks] = useState([]);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const [pageView, setPageView] = useState('list');

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    dispatch(onGetTaskList(path[path.length - 2], path[path.length - 1], page));
  }, [dispatch, page, pageView, pathname]);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onChange = (page) => {
    setPage(page - 1);
  };

  const onChangeCheckedTasks = (checked, id) => {
    if (checked) {
      setCheckedTasks(checkedTasks.concat(id));
    } else {
      setCheckedTasks(checkedTasks.filter((taskId) => taskId !== id));
    }
  };

  const onChangeStarred = (checked, task) => {
    const status = checked;
    const selectedIdList = [task.id];
    const path = pathname.split('/');
    dispatch(
      onUpdateTaskStarredStatus(selectedIdList, status, path[path.length - 1]),
    );
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return taskList;
    } else {
      return taskList.filter((task) =>
        task.title.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  const onChangePageView = (view) => {
    setPageView(view);
  };

  const list = onGetFilteredItems();
  return (
    <>
      <AppsHeader>
        <TaskContentHeader
          checkedTasks={checkedTasks}
          setCheckedTasks={setCheckedTasks}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onChange={onChange}
          page={page}
          onChangePageView={onChangePageView}
          pageView={pageView}
        />
      </AppsHeader>
      <AppsContent>
        {pageView === 'list' ? (
          <>
            <div className='todo-list-desktop'>
              <AppList
                data={list}
                renderItem={(task) => (
                  <TaskListItem
                    key={task.id}
                    task={task}
                    labelList={labelList}
                    onChangeCheckedTasks={onChangeCheckedTasks}
                    checkedTasks={checkedTasks}
                    onChangeStarred={onChangeStarred}
                  />
                )}
                ListEmptyComponent={
                  <ListEmptyResult
                    loading={loading}
                    actionTitle='Add Task'
                    onClick={onOpenAddTask}
                    placeholder={<TodoListSkeleton />}
                  />
                }
              />
            </div>
            <div className='todo-list-mobile'>
              <AppList
                data={list}
                renderItem={(task) => (
                  <TaskListItemMobile
                    key={task.id}
                    task={task}
                    labelList={labelList}
                    checkedTasks={checkedTasks}
                    onChangeStarred={onChangeStarred}
                    onChangeCheckedTasks={onChangeCheckedTasks}
                  />
                )}
                ListEmptyComponent={
                  <ListEmptyResult
                    loading={loading}
                    actionTitle='Add Task'
                    onClick={onOpenAddTask}
                    placeholder={<TodoListSkeleton />}
                  />
                }
              />
            </div>
          </>
        ) : (
          <TaskCalender taskList={list} />
        )}
      </AppsContent>

      {taskList.length > 0 ? (
        <AppsFooter className='todo-footer'>
          <AppsPagination count={totalTasks} page={page} onChange={onChange} />
        </AppsFooter>
      ) : null}

      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </>
  );
};

export default TasksList;
