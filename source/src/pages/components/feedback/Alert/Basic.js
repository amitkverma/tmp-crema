import React from 'react';
import {Alert, Space} from 'antd';

import './basic.less';

const Basic = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Alert message='Success Text' type='success' />
    </Space>
  );
};

export default Basic;
