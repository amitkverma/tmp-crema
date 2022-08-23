import React from 'react';
import SalesGraph from './SalesGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import './index.style.less';

const Sales = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      title={messages['dashboard.salesToday']}
      heightFull
      className='metrics-sales-card'>
      <h2>{data.salesToday}</h2>
      <p>
        {data.salesYesterday} <IntlMessages id='common.yesterday' />
      </p>
      <div className='metrics-sales-graph'>
        <SalesGraph data={data.salesGraphData} />
      </div>
    </AppCard>
  );
};

export default Sales;

Sales.defaultProps = {
  data: {
    salesToday: '',
    salesYesterday: '',
    salesGraphData: [],
  },
};

Sales.propTypes = {
  data: PropTypes.object,
};
