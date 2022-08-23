import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import MapChart from '../../Widgets/CountryMap/MapChart';
import AppSelect from '../../../../@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';

const EarningByCountry = ({earningData}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['dashboard.analytics.earningByCountries']}
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <div className='country-map-chart'>
        <MapChart />
      </div>

      <div className='earning-country-footer'>
        {earningData.map((data) => (
          <div className='earning-country-footer-item' key={data.id}>
            <h3>${data.amount}</h3>
            <div className='ant-row ant-row-middle'>
              <span className='dot' style={{backgroundColor: data.color}} />
              <p>{data.country}</p>
            </div>
          </div>
        ))}
      </div>
    </AppCard>
  );
};

export default EarningByCountry;

EarningByCountry.propTypes = {
  earningData: PropTypes.array,
};
