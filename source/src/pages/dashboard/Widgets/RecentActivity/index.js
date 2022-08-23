import React from 'react';
import NotificationItem from '../../../../@crema/core/AppNotifications/NotificationItem';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {CloseOutlined} from '@ant-design/icons';
import {Button, List} from 'antd';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import './index.style.less';

const RecentActivity = (props) => {
  const {data} = props;

  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.recentActivity']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }>
      <AppScrollbar className='recent-activity-scrollbar'>
        <List
          dataSource={data}
          renderItem={(item) => {
            return <NotificationItem item={item} key={item.id} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default RecentActivity;

RecentActivity.defaultProps = {
  data: [],
};

RecentActivity.propTypes = {
  data: PropTypes.array,
};
