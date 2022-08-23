import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppMenu from '../../../../@crema/core/AppMenu';
import NotificationCell from './NotificationCell';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const Notifications = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='hc-notification-card no-card-space-ltr-rtl'
      title={messages['healthCare.notification']}
      extra={<AppMenu />}>
      <AppScrollbar className='hc-notification-scrollbar'>
        <List
          dataSource={data}
          renderItem={(notification) => (
            <NotificationCell
              key={notification.id}
              notification={notification}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;

Notifications.defaultProps = {
  data: [],
};

Notifications.propTypes = {
  data: PropTypes.array,
};
