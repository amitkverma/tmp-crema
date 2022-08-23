import React from 'react';
import {Space, Progress} from 'antd';

const MiniSizeCircularBar = () => {
  return (
    <Space>
      <Progress type='circle' percent={30} width={80} />
      <Progress type='circle' percent={70} width={80} status='exception' />
      <Progress type='circle' percent={100} width={80} />
    </Space>
  );
};

export default MiniSizeCircularBar;
