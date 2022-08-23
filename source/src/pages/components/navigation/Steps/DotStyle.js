import React from 'react';
import {Space, Steps} from 'antd';

const {Step} = Steps;

const DotStyle = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Steps progressDot current={1}>
        <Step title='Finished' description='This is a description.' />
        <Step title='In Progress' description='This is a description.' />
        <Step title='Waiting' description='This is a description.' />
      </Steps>
    </Space>
  );
};

export default DotStyle;
