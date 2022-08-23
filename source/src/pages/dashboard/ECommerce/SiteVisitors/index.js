import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import MapView from './MapView';
import './index.style.less';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col, List} from 'antd';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

const CountryCell = ({data}) => (
  <List.Item className='site-visitor-cell item-hover'>
    <span className='countries-thumb'>
      <img src={data.icon} alt='icon' />
    </span>
    <h6 className='text-truncate'>{data.country}</h6>
    <span className='visitorsCount'>{data.value}</span>
  </List.Item>
);

CountryCell.propTypes = {
  data: PropTypes.object,
};

const SiteVisitors = ({siteVisitorsData}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl site-visitor-card'
      title={messages['eCommerce.siteVisitorsStatistics']}>
      <AppRowContainer>
        <Col xs={24} md={7} xl={7} xxl={6}>
          <h3 className='site-visitor-title'>
            {messages['eCommerce.countries']}
          </h3>
          <List
            dataSource={siteVisitorsData}
            renderItem={(data) => <CountryCell key={data.id} data={data} />}
          />
        </Col>
        <Col xs={24} md={10} xl={10} xxl={12}>
          <MapView />
        </Col>
        <Col xs={24} md={7} xl={7} xxl={6}>
          <h3 className='site-visitor-title'>
            {messages['eCommerce.countries']}
          </h3>
          <List
            dataSource={siteVisitorsData}
            renderItem={(data) => (
              <CountryCell key={'sec-c-' + data.id} data={data} />
            )}
          />
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default SiteVisitors;

SiteVisitors.propTypes = {
  siteVisitorsData: PropTypes.array,
};
