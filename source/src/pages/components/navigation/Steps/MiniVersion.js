import React from 'react';
import {Space, Steps} from 'antd';

const {Step} = Steps;

const MiniVersion = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Steps size='small' current={1}>
        <Step title='Finished' />
        <Step title='In Progress' />
        <Step title='Waiting' />
      </Steps>
    </Space>
  );
};

export default MiniVersion;
