import React from 'react';
import {Space, TimePicker} from 'antd';
import moment from 'moment';

const TimePickerSize = () => {
  return (
    <Space wrap>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='large' />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='small' />
    </Space>
  );
};

export default TimePickerSize;
