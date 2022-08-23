import React from 'react';
import {Dropdown, Menu} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <a href='https://www.antgroup.com'>1st menu item</a>
    </Menu.Item>
    <Menu.Item key='1'>
      <a href='https://www.aliyun.com'>2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='3'>3rd menu item</Menu.Item>
  </Menu>
);

const TriggerMode = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
        Click me <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default TriggerMode;
