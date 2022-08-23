import React from 'react';
import {BackTop, Space} from 'antd';
import './basic.style.less';

const Basic = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <BackTop />
      Scroll down to see the bottom-right
      <strong className='site-back-top-basic'> gray </strong>
      button.
    </Space>
  );
};

export default Basic;
