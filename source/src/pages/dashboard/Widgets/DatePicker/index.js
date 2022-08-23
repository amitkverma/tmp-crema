import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {Calendar} from 'antd';

const DateSelector = () => {
  return (
    <AppCard heightFull className='no-card-space wid-date-calendar-card'>
      <Calendar className='wid-date-calendar' />
    </AppCard>
  );
};

export default DateSelector;
