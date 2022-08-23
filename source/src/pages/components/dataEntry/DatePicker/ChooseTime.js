import React from 'react';
import {Space, DatePicker} from 'antd';

const {RangePicker} = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const ChooseTime = () => {
  return (
    <Space>
      <DatePicker showTime onChange={onChange} onOk={onOk} />
      <RangePicker
        showTime={{format: 'HH:mm'}}
        format='YYYY-MM-DD HH:mm'
        onChange={onChange}
        onOk={onOk}
      />
    </Space>
  );
};

export default ChooseTime;
