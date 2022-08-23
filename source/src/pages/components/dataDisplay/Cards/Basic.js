import React from 'react';
import {Card, Space} from 'antd';
import './basic.style.less';

const Basic = () => {
  return (
    <Space direction='vertical'>
      <Card
        className='basic-card'
        title='Default size card'
        extra={<a href='#'>More</a>}
        style={{width: 300}}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        className='basic-card'
        size='small'
        title='Small size card'
        extra={<a href='#'>More</a>}
        style={{width: 300}}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
};

export default Basic;
