import React from 'react';
import {Button, Space, Popover} from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Trigger = () => {
  return (
    <Space wrap>
      <Popover content={content} title='Title' trigger='hover'>
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title='Title' trigger='focus'>
        <Button>Focus me</Button>
      </Popover>
      <Popover content={content} title='Title' trigger='click'>
        <Button>Click me</Button>
      </Popover>
    </Space>
  );
};

export default Trigger;
