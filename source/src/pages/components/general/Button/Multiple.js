import React, {Component} from 'react';
import {Button, Dropdown, Menu, Space} from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key='1'>1st item</Menu.Item>
    <Menu.Item key='2'>2nd item</Menu.Item>
    <Menu.Item key='3'>3rd item</Menu.Item>
  </Menu>
);

class Multiple extends Component {
  render() {
    return (
      <Space wrap>
        <Button type='primary'>primary</Button>
        <Button>secondary</Button>
        <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
      </Space>
    );
  }
}

export default Multiple;
