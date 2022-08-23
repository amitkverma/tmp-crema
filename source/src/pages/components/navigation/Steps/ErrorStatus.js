import React from 'react';
import {Space, Steps} from 'antd';

const Step = Steps.Step;

const ErrorStatus = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Steps current={1} status='error'>
        <Step title='Finished' description='This is a description' />
        <Step title='In Process' description='This is a description' />
        <Step title='Waiting' description='This is a description' />
      </Steps>
    </Space>
  );
};

export default ErrorStatus;
