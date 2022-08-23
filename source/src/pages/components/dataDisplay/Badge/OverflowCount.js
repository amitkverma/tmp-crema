import React from 'react';
import {Badge} from 'antd';
import './index.style.less';

const OverflowCount = () => {
  return (
    <div className='ant-badge-group'>
      <Badge count={99}>
        <a href='#' className='head-example' />
      </Badge>
      <Badge count={100}>
        <a href='#' className='head-example' />
      </Badge>
      <Badge count={99} overflowCount={10}>
        <a href='#' className='head-example' />
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <a href='#' className='head-example' />
      </Badge>
    </div>
  );
};

export default OverflowCount;
