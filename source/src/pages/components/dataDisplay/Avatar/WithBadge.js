import React from 'react';
import {Avatar, Badge, Space} from 'antd';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import './withBadge.style.less';

const WithBadge = () => {
  return (
    <Space wrap>
      <span className='avatar-item'>
        <Badge count={1}>
          <Avatar shape='square' icon={<UserOutlined />} />
        </Badge>
      </span>
      <span>
        <Badge dot>
          <Avatar shape='square' icon={<UserOutlined />} />
        </Badge>
      </span>
    </Space>
  );
};

export default WithBadge;
