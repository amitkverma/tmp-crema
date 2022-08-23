import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {List, Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import './index.style.less';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const TaskList = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.taskList']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }>
      <AppScrollbar className='task-list-scrollbar'>
        <List
          dataSource={data}
          renderItem={(item) => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TaskList;

TaskList.defaultProps = {
  data: [],
};

TaskList.propTypes = {
  data: PropTypes.array,
};
