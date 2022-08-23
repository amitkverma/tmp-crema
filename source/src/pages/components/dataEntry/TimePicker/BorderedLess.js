import {TimePicker} from 'antd';

const {RangePicker} = TimePicker;

import React from 'react';

const BorderedLess = () => {
  return (
    <>
      <TimePicker bordered={false} />
      <RangePicker bordered={false} />
    </>
  );
};

export default BorderedLess;
