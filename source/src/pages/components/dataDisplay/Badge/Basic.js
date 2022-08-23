import React from 'react';
import {Badge} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';
import './index.style.less';

const Basic = () => {
  return (
    <div className='ant-badge-group'>
      <Badge count={5}>
        <a href='#' className='head-example' />
      </Badge>
      <Badge count={0} showZero>
        <a href='#' className='head-example' />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{color: '#f5222d'}} />}>
        <a href='#' className='head-example' />
      </Badge>
    </div>
  );
};

export default Basic;
