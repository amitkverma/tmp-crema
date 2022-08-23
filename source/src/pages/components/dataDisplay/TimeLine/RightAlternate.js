import {Timeline} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';
import React from 'react';

const RightAlternate = () => {
  return (
    <Timeline mode='right'>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
      <Timeline.Item
        dot={<ClockCircleOutlined style={{fontSize: '16px'}} />}
        color='red'>
        Technical testing 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
    </Timeline>
  );
};

export default RightAlternate;
