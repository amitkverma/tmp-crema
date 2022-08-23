import React from 'react';
import AppList from '../../../../@crema/core/AppList';
import AppCard from '../../../../@crema/core/AppCard';
import FollowItem from './FollowItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';

const WhoToFollow = ({whoToFollow}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl who-follow-card'
      title={messages['wall.whoToFollow']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}
      actions={[
        <span key={1} className='who-follow-link'>
          View More
        </span>,
      ]}>
      <AppList
        data={whoToFollow}
        renderItem={(item, index) => <FollowItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default WhoToFollow;

WhoToFollow.propTypes = {
  whoToFollow: PropTypes.array,
};
