import React from 'react';
import {Steps, Space} from 'antd';
import './basic.style.less';

const {Step} = Steps;

const Basic = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Steps current={1}>
        <Step title='Finished' description='This is a description.' />
        <Step
          title='In Progress'
          subTitle='Left 00:00:08'
          description='This is a description.'
        />
        <Step title='Waiting' description='This is a description.' />
      </Steps>
    </Space>
  );
};

export default Basic;
