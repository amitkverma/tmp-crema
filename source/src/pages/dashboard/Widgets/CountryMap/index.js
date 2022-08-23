import React from 'react';
import MapChart from './MapChart';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import './index.style.less';

const CountryMap = () => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='wid-country-card'
      heightFull
      title={messages['dashboard.usa']}
      extra={<a href='#/'>{messages['common.next']}</a>}>
      <div className='wid-country-map-chart'>
        <MapChart />
      </div>
    </AppCard>
  );
};

export default CountryMap;
