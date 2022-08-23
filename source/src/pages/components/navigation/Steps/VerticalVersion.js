import React from 'react';
import {Space, Steps} from 'antd';

const {Step} = Steps;

const VerticalVersion = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Steps direction='vertical' size='small' current={1}>
        <Step title='Finished' description='This is a description.' />
        <Step title='In Progress' description='This is a description.' />
        <Step title='Waiting' description='This is a description.' />
      </Steps>
    </Space>
  );
};

export default VerticalVersion;
