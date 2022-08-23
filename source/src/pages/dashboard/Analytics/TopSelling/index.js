import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import ProductCell from './ProductCell';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const TopSelling = ({products}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl top-selling-card'
      heightFull
      title={messages['dashboard.analytics.topSellingProducts']}
      actions={[<span key={1}>{'+12 ' + messages['common.more']}</span>]}>
      <List
        dataSource={products}
        renderItem={(data, index) => <ProductCell key={index} data={data} />}
      />
    </AppCard>
  );
};

export default TopSelling;

TopSelling.propTypes = {
  products: PropTypes.array,
};
