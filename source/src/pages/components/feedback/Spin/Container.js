import React from 'react';
import {Space, Spin} from 'antd';
import './container.style.less';

const Container = () => {
  return (
    <Space>
      <Spin className='example' />
    </Space>
  );
};

export default Container;
