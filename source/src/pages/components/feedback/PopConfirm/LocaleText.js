import React from 'react';
import {Space, Popconfirm} from 'antd';

const LocaleText = () => {
  return (
    <Space>
      <Popconfirm title='Are you sure？' okText='Yes' cancelText='No'>
        <a href='#'>Delete</a>
      </Popconfirm>
    </Space>
  );
};
export default LocaleText;
