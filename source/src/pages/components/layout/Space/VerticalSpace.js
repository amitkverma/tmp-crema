import {Space, Card} from 'antd';

function SpaceVertical() {
  return (
    <Space direction='vertical'>
      <Card title='Card' style={{width: 300}}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title='Card' style={{width: 300}}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

import React from 'react';

const VerticalSpace = () => {
  return <SpaceVertical />;
};

export default VerticalSpace;
