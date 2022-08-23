import moment from 'moment';
import {DatePicker, Space} from 'antd';

const {RangePicker} = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

import React from 'react';

const DisabledDateTime = () => {
  return (
    <Space direction='vertical' size={12}>
      <DatePicker
        format='YYYY-MM-DD HH:mm:ss'
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}
      />
      <DatePicker picker='month' disabledDate={disabledDate} />
      <RangePicker disabledDate={disabledDate} />
      <RangePicker
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [
            moment('00:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss'),
          ],
        }}
        format='YYYY-MM-DD HH:mm:ss'
      />
    </Space>
  );
};

export default DisabledDateTime;
