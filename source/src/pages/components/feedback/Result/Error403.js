import {Result, Button} from 'antd';

import React from 'react';

const Error403 = () => {
  return (
    <Result
      status='403'
      title='403'
      subTitle='Sorry, you are not authorized to access this page.'
      extra={<Button type='primary'>Back Home</Button>}
    />
  );
};

export default Error403;
