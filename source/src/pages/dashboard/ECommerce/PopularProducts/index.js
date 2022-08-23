import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import ProductCell from './ProductCell';
import './index.style.less';
import {List} from 'antd';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import {useIntl} from 'react-intl';

const PopularProducts = ({popularProducts}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.popularProducts']}>
      <AppScrollbar className='popular-product-scrollbar'>
        <List
          className='product-grid'
          dataSource={popularProducts}
          renderItem={(data, index) => (
            <ProductCell key={'product-' + index} data={data} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default PopularProducts;

PopularProducts.propTypes = {
  popularProducts: PropTypes.array,
};
