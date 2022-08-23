import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import NotificationCell from './NotificationCell';
import {List} from 'antd';
import './index.style.less';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppMenu from '../../../../@crema/core/AppMenu';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const NotificationsEcom = (props) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.notifications']}
      extra={<AppMenu />}>
      <AppScrollbar className='notification-scrollBar'>
        <List
          itemLayout='horizontal'
          dataSource={props.notifications}
          renderItem={(item) => <NotificationCell key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default NotificationsEcom;

NotificationsEcom.propTypes = {
  notifications: PropTypes.array,
};
