import React from 'react';
import PropTypes from 'prop-types';
import VisitorsGraph from './VisitorsGraph';
import {useIntl} from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import {green, red} from '@ant-design/colors';
import {Link} from 'react-router-dom';
import './index.style.less';

const ActiveVisitors = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard className='no-card-space'>
      <div className='active-visitor-graph-wrap'>
        <div className='active-visitor-graph-header'>
          <h3>{messages['dashboard.analytics.activeVisitors']}</h3>
          <p>{messages['dashboard.analytics.pageViewPerMinutes']}</p>
        </div>
        <div className='active-visitor-graph'>
          <VisitorsGraph data={data.graphData} />
        </div>
      </div>
      <div className='active-visitor-content'>
        <div>
          <div className='active-visitor-content-header'>
            <h3>{data.value}</h3>
            <span style={{color: data.growth > 0.0 ? green[6] : red[5]}}>
              {data.growth}% Then yesterday
            </span>
          </div>
          <p>{data.slug}</p>
        </div>
        <div className='active-visitor-footer'>
          <Link className='active-visitor-link' underline='none' to='#'>
            View Report
          </Link>
        </div>
      </div>
    </AppCard>
  );
};

export default ActiveVisitors;

ActiveVisitors.defaultProps = {};

ActiveVisitors.propTypes = {
  data: PropTypes.object,
};
