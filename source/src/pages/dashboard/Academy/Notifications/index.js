import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const NotificationItem = ({notification}) => {
  return (
    <List.Item className='aca-notification-item item-hover'>
      <div
        className='aca-notification-thumb'
        style={{
          backgroundColor: notification.bgcolor,
          color: notification.color,
        }}>
        {notification.letter}
      </div>
      <div className='aca-notification-content'>
        <h3>{notification.content}</h3>
        <p className='text-truncate'>{notification.date}</p>
      </div>
    </List.Item>
  );
};

const Notifications = ({notifications}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      heightFull
      title={messages['academy.notifications']}>
      <List
        dataSource={notifications}
        renderItem={(data, index) => (
          <NotificationItem key={index} notification={data} />
        )}
      />
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  notifications: PropTypes.array,
};

NotificationItem.propTypes = {
  notification: PropTypes.object,
};
