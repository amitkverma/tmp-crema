import React from 'react';
import {Space, TimePicker} from 'antd';
import moment from 'moment';

const Disabled = () => {
  return (
    <Space>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
    </Space>
  );
};

export default Disabled;
