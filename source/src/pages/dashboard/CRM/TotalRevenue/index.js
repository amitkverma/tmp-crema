import React from 'react';
import RevenueGraph from './RevenueGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const TotalRevenue = ({revenueData}) => {
  return (
    <>
      <h2 className='card-outer-title text-uppercase'>
        <IntlMessages id='dashboard.totalRevenue' />
      </h2>
      <AppCard className='total-revenue-card'>
        <div className='revenue-row'>
          <div className='revenue-content'>
            <div className='revenue-content-top'>
              <h3>{revenueData.ytdRevenue}</h3>
              <p>
                <IntlMessages id='dashboard.ytdRevenue' />
              </p>
            </div>
            <div className='revenue-content-bottom'>
              <div className='revenue-content-item'>
                <h3 style={{color: '#0A8FDC'}}>{revenueData.clients}</h3>
                <p>
                  <IntlMessages id='dashboard.clients' />
                </p>
              </div>

              <div className='revenue-content-item'>
                <h3 style={{color: '#49BD65'}}>{revenueData.countries}</h3>
                <p>
                  <IntlMessages id='dashboard.countries' />
                </p>
              </div>
            </div>
          </div>
          <div className='revenue-graph'>
            <RevenueGraph data={revenueData.revenueGraphData} />
          </div>
        </div>
      </AppCard>
    </>
  );
};

export default TotalRevenue;

TotalRevenue.defaultProps = {
  revenueData: {
    ytdRevenue: '',
    clients: 0,
    countries: '',
    revenueGraphData: [],
  },
};

TotalRevenue.propTypes = {
  revenueData: PropTypes.object,
};
