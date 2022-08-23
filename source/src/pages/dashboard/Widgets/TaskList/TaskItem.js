import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const TaskItem = (props) => {
  const {item} = props;

  return (
    <List.Item key={item.id} className='task-item item-hover'>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </List.Item>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  item: PropTypes.object.isRequired,
};
