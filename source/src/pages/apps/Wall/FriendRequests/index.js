import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import AppList from '../../../../@crema/core/AppList';
import RequestItem from './RequestItem';
import PropTypes from 'prop-types';
import './index.style.less';
import {useIntl} from 'react-intl';

const FriendRequests = ({friendRequests}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl request-card'
      title={`Friends`}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}>
      <AppList
        animation='transition.slideRightBigIn'
        data={friendRequests}
        renderItem={(data, index) => <RequestItem key={index} request={data} />}
      />
    </AppCard>
  );
};

export default FriendRequests;

FriendRequests.propTypes = {
  friendRequests: PropTypes.array,
};
