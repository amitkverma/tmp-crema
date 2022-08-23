import React from 'react';
import {Space, Popover, Steps} from 'antd';

const {Step} = Steps;

const customDot = (dot, {status, index}) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }>
    {dot}
  </Popover>
);

const CustomizedDotStyle = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Steps current={1} progressDot={customDot}>
        <Step title='Finished' description='You can hover on the dot.' />
        <Step title='In Progress' description='You can hover on the dot.' />
        <Step title='Waiting' description='You can hover on the dot.' />
        <Step title='Waiting' description='You can hover on the dot.' />
      </Steps>
    </Space>
  );
};

export default CustomizedDotStyle;
