import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import {isBreakPointDown} from '../../../../@crema/utility/Utils';
import {List, Checkbox} from 'antd';

// const getData = (data) => {
//   if (isBreakPointDown('xl')) {
//     return data.slice(0, 5);
//   } else {
//     return data.slice(0, 6);
//   }
// };

const TaskList = (props) => {
  const {todayTaskData} = props;
  const [taskList, handleList] = useState(todayTaskData);

  const handleChange = (e, task) => {
    task.isChecked = e.target.checked;
    const list = todayTaskData.map((item) =>
      item.id === task.id ? task : item,
    );
    handleList(list);
  };

  return (
    <List
      dataSource={taskList}
      renderItem={(task) => {
        return (
          <List.Item key={task.id} className='task-list-item item-hover'>
            <List.Item.Meta
              avatar={
                <Checkbox
                  color='primary'
                  checked={task.isChecked}
                  onChange={(e) => handleChange(e, task)}
                />
              }
              title={task.task}
              description={task.date}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default TaskList;

TaskList.defaultProps = {
  todayTaskData: [],
};

TaskList.propTypes = {
  todayTaskData: PropTypes.array,
};
