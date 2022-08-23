import React from 'react';
import {Space, Progress} from 'antd';

const CircularBar = () => {
  return (
    <Space wrap>
      <Progress type='circle' percent={75} />
      <Progress type='circle' percent={70} status='exception' />
      <Progress type='circle' percent={100} />
    </Space>
  );
};

export default CircularBar;
