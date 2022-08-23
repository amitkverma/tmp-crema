import {InputNumber} from 'antd';

function onChange(value) {
  console.log('changed', value);
}

import React from 'react';

const HighPrecisionDecimals = () => {
  return (
    <InputNumber
      style={{
        width: 200,
      }}
      defaultValue='1'
      min='0'
      max='10'
      step='0.00000000000001'
      onChange={onChange}
      stringMode
    />
  );
};

export default HighPrecisionDecimals;
