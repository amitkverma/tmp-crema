import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Dropdown, Menu} from 'antd';
import {green, red} from '@ant-design/colors';
import {DownOutlined} from '@ant-design/icons';
import {BiCheck} from 'react-icons/bi';
import './UserInfo.style.less';

const UserInfo = ({user, showStatus, showStatusActive}) => {
  const getUserAvatar = () => {
    const name = user.displayName || user.name;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  if (!user) {
    return null;
  }

  const statusActiveMenu = (
    <Menu className='status-active-menu'>
      <Menu.Item key='0' className='active'>
        <BiCheck className='icon' /> Active
      </Menu.Item>
      <Menu.Item key='1'>
        <BiCheck className='icon' /> Away
      </Menu.Item>
      <Menu.Item key='2'>
        <BiCheck className='icon' /> Do not distrub
      </Menu.Item>
      <Menu.Item key='3'>
        <BiCheck className='icon' /> Invisible
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='chat-user-info'>
      <div className='chat-user-avatar-view'>
        {user.photoURL || user.image ? (
          <Avatar
            className='chat-user-avatar'
            src={user.photoURL || user.image}
          />
        ) : (
          <Avatar className='chat-user-avatar'>{getUserAvatar()}</Avatar>
        )}
        {showStatus && (
          <span
            className='chat-user-status-dot chat-user-status-dot-only'
            style={{
              backgroundColor: user.status === 'online' ? green[6] : red[6],
            }}
          />
        )}
        {showStatusActive && (
          <span className='chat-user-status'>
            <span
              className='chat-user-status-dot'
              style={{
                backgroundColor: user.status === 'online' ? green[6] : red[6],
              }}
            />
            <Dropdown overlay={statusActiveMenu} trigger={['click']}>
              <a
                className='ant-dropdown-link'
                onClick={(e) => e.preventDefault()}>
                <DownOutlined />
              </a>
            </Dropdown>
          </span>
        )}
      </div>
      <div className='chat-user-info-content'>
        <h3 className='chat-user-name text-truncate'>
          {user.displayName || user.name
            ? user.displayName || user.name
            : user.email}
        </h3>
        <span className='chat-user-status-text text-truncate'>
          {user.status ? user.status : 'Online'}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  showStatus: PropTypes.bool,
  showStatusActive: PropTypes.bool,
};
