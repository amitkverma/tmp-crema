import React from 'react';
import {Space, Progress} from 'antd';

const DashboardBar = () => {
  return (
    <Space>
      <Progress type='dashboard' percent={75} />
    </Space>
  );
};

export default DashboardBar;
