import React from 'react';
import WorkViewsGraph from './WorkViewsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const WorkViews = ({data}) => {
  return (
    <AppCard className='work-view-card' heightFull>
      <h3>{data.views}</h3>
      <p>
        <IntlMessages id='dashboard.workViews' />
      </p>

      <WorkViewsGraph data={data.graphData} />
    </AppCard>
  );
};

export default WorkViews;

WorkViews.defaultProps = {
  data: {
    views: '',
    graphData: [],
  },
};

WorkViews.propTypes = {
  data: PropTypes.object,
};
