import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import CustomerItem from './CustomerItem';
import './index.style.less';
import {List} from 'antd';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import {useIntl} from 'react-intl';

const NewCustomers = (props) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.newCustomers']}>
      <AppScrollbar className='customer-scrollbar'>
        <List
          dataSource={props.newCustomers}
          renderItem={(item) => <CustomerItem key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default NewCustomers;

NewCustomers.propTypes = {
  newCustomers: PropTypes.array,
};
