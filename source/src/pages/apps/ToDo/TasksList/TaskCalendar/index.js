import React, {useState} from 'react';
import {Badge, Calendar} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import ViewEditTodo from './ViewEditTodo';
import AddNewTask from '../../AddNewTask';
import './index.style.less';

const getListData = (value, data) => {
  let listData = [];
  data.map((task) => {
    if (
      value.format('MM-DD-YYYY') === moment(task.startDate).format('MM-DD-YYYY')
    ) {
      listData = listData.concat({
        color: task.priority ? task.priority.color : '#7c7c7c',
        title: task.title,
        id: task.id,
      });
    }
  });

  return listData || [];
};

const TaskCalender = ({taskList}) => {
  const [isViewTodo, setIsViewToDo] = useState(false);
  const [toDoId, setToDoId] = useState('');
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment(new Date()));

  const onSelectDate = (value) => {
    setSelectedDate(value);
  };

  const onPanelChange = () => {
    onCloseAddTask();
  };
  const onOpenAddTask = () => {
    if (selectedDate) {
      setAddTaskOpen(true);
    } else {
      setAddTaskOpen(false);
    }
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onChangeViewToDo = (id) => {
    setIsViewToDo(!isViewTodo);
    setToDoId(id);
  };

  const dateCellRender = (value) => {
    const listData = getListData(value, taskList);
    return (
      <ul className='events'>
        {listData.map((item) => (
          <li key={item.title}>
            <Badge
              color={item.color ? item.color : '#7c7c7c'}
              text={item.title}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onChangeViewToDo(item.id);
              }}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={(value) => {
          onSelectDate(value);
          onOpenAddTask();
        }}
        value={selectedDate}
        onPanelChange={onPanelChange}
      />
      {isViewTodo ? (
        <ViewEditTodo
          toDoId={toDoId}
          taskList={taskList}
          showModal={isViewTodo}
        />
      ) : null}
      {isAddTaskOpen ? (
        <AddNewTask
          selectedDate={selectedDate}
          onOpenAddTask={onOpenAddTask}
          onCloseAddTask={onCloseAddTask}
          isAddTaskOpen={isAddTaskOpen}
        />
      ) : null}
    </>
  );
};

TaskCalender.propTypes = {
  taskList: PropTypes.any,
};

export default TaskCalender;
