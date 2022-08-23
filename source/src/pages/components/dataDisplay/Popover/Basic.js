import React from 'react';
import {Button, Space, Popover} from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Basic = () => {
  return (
    <Space>
      <Popover content={content} title='Title'>
        <Button type='primary'>Hover me</Button>
      </Popover>
    </Space>
  );
};

export default Basic;
