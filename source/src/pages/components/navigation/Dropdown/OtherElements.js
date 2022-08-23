import React from 'react';
import {Space, Dropdown, Menu} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'>
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key='1'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'>
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='3' disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

const OtherElements = () => {
  return (
    <Space>
      <Dropdown overlay={menu}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};

export default OtherElements;
