import React from 'react';
import TaskList from './TaskList';
// import DateSelector from './DateSelector';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Calendar, Col} from 'antd';
import './index.style.less';
import {useIntl} from 'react-intl';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const TodayTasks = (props) => {
  const {todayTaskData} = props;
  const {messages} = useIntl();

  return (
    <AppCard
      className='today-task-card'
      title={messages['dashboard.todayTasks']}
      heightFull
      extra={
        <div className='today-task-extra'>
          <a href='#' className='link link-grey link-hide'>
            <IntlMessages id='common.createTask' />
          </a>
          <a href='#' className='link'>
            <IntlMessages id='common.viewAll' />
          </a>
        </div>
      }>
      <AppRowContainer>
        <Col xs={24} md={12} xxl={14}>
          <AppScrollbar className='today-task-scrollbar'>
            <TaskList todayTaskData={todayTaskData} />
          </AppScrollbar>
        </Col>

        <Col xs={24} md={12} xxl={10} className='task-calendar-col'>
          <Calendar className='task-calendar' />
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default TodayTasks;

TodayTasks.defaultProps = {
  todayTaskData: [],
};

TodayTasks.propTypes = {
  todayTaskData: PropTypes.array,
};
