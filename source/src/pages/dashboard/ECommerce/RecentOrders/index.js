import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';

import AppSelect from '../../../../@crema/core/AppSelect';
import OrderTable from './OrderTable';
import './index.style.less';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

const RecentOrders = ({recentOrders}) => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.recentOrders']}
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
      <OrderTable orderData={recentOrders} />
    </AppCard>
  );
};

export default RecentOrders;

RecentOrders.propTypes = {
  recentOrders: PropTypes.array,
};
