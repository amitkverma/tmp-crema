import React from 'react';
import {useSelector} from 'react-redux';
import AddNewTask from '../AddNewTask';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppsSideBarFolderItem from '../../../../@crema/core/AppsSideBarFolderItem';
import LabelItem from './LabelItem';
import AppList from '../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '../../../../@crema/core/AppSkeleton/SidebarListSkeleton';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import {Button, List} from 'antd';
import './index.style.less';
import {PlusOutlined} from '@ant-design/icons';

const TaskSideBar = () => {
  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const folderList = useSelector(({todoApp}) => todoApp.folderList);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  return (
    <>
      <div className='todo-sidebar-header'>
        <Button
          ghost
          type='primary'
          icon={<PlusOutlined style={{marginRight: 8}} />}
          onClick={onOpenAddTask}>
          <IntlMessages id='todo.addNewTask' />
        </Button>
      </div>

      <AppScrollbar className='todo-sidebar-scrollbar'>
        <div className='todo-sidebar-content'>
          <List className='todo-sidebar-list' itemLayout='horizontal'>
            <AppList
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/todo/folder/${item.alias}`}
                />
              )}
            />
          </List>

          <h5 className='todo-sidebar-title'>Labels</h5>

          <List className='todo-sidebar-list' aria-label='main mailbox folders'>
            <AppList
              data={labelList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(label) => <LabelItem key={label.id} label={label} />}
            />
          </List>
        </div>
      </AppScrollbar>

      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </>
  );
};

export default TaskSideBar;
