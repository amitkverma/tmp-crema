import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import TransactionTable from './TransactionTable';
import AppSelect from '../../../../@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';

const OrderNTransaction = ({transactionData}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      heightFull
      title={messages['dashboard.analytics.ordersTransaction']}
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
      <TransactionTable transactionData={transactionData} />
    </AppCard>
  );
};

export default OrderNTransaction;

OrderNTransaction.propTypes = {
  transactionData: PropTypes.array,
};
