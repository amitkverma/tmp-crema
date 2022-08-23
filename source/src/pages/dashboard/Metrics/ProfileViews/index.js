import React from 'react';
import ProfileViewsGraph from './ProfileViewsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const ProfileViews = ({data}) => {
  return (
    <AppCard className='profile-view-card' heightFull>
      <h3>{data.views}</h3>
      <p>
        <IntlMessages id='dashboard.profileViews' />
      </p>
      <div className='profile-view-graph-view'>
        <ProfileViewsGraph data={data.graphData} />
      </div>
    </AppCard>
  );
};

export default ProfileViews;

ProfileViews.defaultProps = {
  data: {
    views: '',
    graphData: [],
  },
};

ProfileViews.propTypes = {
  data: PropTypes.object,
};
