import React from 'react';
import WebTrafficGraph from './WebTrafficGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {blue, grey, red} from '@ant-design/colors';
import './index.style.less';
import {useIntl} from 'react-intl';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const WebTraffic = ({websiteTrafficData}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='web-traffic-card'
      title={messages['dashboard.websiteTraffic']}>
      <WebTrafficGraph websiteTrafficData={websiteTrafficData} />
      <div className='web-traffic-content'>
        <div className='web-traffic-item'>
          <h4 style={{color: red[5]}}>1,265</h4>
          <p className='mb-0'>
            <IntlMessages id='common.subscribers' />
          </p>
        </div>
        <div className='web-traffic-item'>
          <h4 style={{color: grey[4]}}>2021</h4>
        </div>
        <div className='web-traffic-item'>
          <h4 style={{color: blue[4]}}>12,432</h4>
          <p className='mb-0'>
            <IntlMessages id='common.newUsers' />
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default WebTraffic;

WebTraffic.defaultProps = {
  websiteTrafficData: [],
};

WebTraffic.propTypes = {
  websiteTrafficData: PropTypes.array,
};
