import React from 'react';
import {Space, Slider} from 'antd';

const SliderCustomize = () => {
  function formatter(value) {
    return `${value}%`;
  }

  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Slider tipFormatter={formatter} />
      <Slider tipFormatter={null} />
    </Space>
  );
};

export default SliderCustomize;
