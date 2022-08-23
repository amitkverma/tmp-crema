import React from 'react';
import {Space, Dropdown, Menu, message} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const onClick = ({key}) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key='1'>1st menu item</Menu.Item>
    <Menu.Item key='2'>2nd menu item</Menu.Item>
    <Menu.Item key='3'>3rd menu item</Menu.Item>
  </Menu>
);
const ClickEvent = () => {
  return (
    <Space>
      <Dropdown overlay={menu}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};

export default ClickEvent;
