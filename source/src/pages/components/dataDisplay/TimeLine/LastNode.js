import React from 'react';
import {Space, Timeline} from 'antd';

const LastNode = () => {
  return (
    <Space>
      <Timeline pending='Recording...'>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      </Timeline>
    </Space>
  );
};

export default LastNode;
