import React from 'react';
import {Space, TimePicker} from 'antd';
import moment from 'moment';

const format = 'HH:mm';

const HourMinute = () => {
  return (
    <Space>
      <TimePicker defaultValue={moment('12:08', format)} format={format} />
    </Space>
  );
};

export default HourMinute;
