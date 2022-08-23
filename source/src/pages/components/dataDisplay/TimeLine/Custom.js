import React from 'react';
import {Space, Timeline} from 'antd';
import Icon from '@ant-design/icons';

const Custom = () => {
  return (
    <Space>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={<Icon type='clock-circle-o' style={{fontSize: '16px'}} />}
          color='red'>
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Space>
  );
};
export default Custom;
