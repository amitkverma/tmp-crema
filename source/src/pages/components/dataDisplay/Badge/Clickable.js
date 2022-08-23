import React from 'react';
import {Badge, Space} from 'antd';
import './index.style.less';

const Clickable = () => {
  return (
    <Space>
      <a href='#'>
        <Badge count={5}>
          <span className='head-example' />
        </Badge>
      </a>
    </Space>
  );
};

export default Clickable;
