import {Steps} from 'antd';

const {Step} = Steps;
import React from 'react';

const StepsWithProgress = () => {
  return (
    <Steps current={1} percent={60}>
      <Step title='Finished' description='This is a description.' />
      <Step
        title='In Progress'
        subTitle='Left 00:00:08'
        description='This is a description.'
      />
      <Step title='Waiting' description='This is a description.' />
    </Steps>
  );
};

export default StepsWithProgress;
