import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const NotificationCell = ({notification}) => {
  return (
    <List.Item className='hc-notification-cell item-hover'>
      <span
        className='dot'
        style={{
          backgroundColor: notification.color,
        }}
      />
      <div className='hc-notification-content'>
        <h5>{notification.title}</h5>
        <p>{notification.time}</p>
      </div>
    </List.Item>
  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  notification: PropTypes.object.isRequired,
};
