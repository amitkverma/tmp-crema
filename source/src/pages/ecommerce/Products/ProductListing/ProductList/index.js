import React from 'react';
import ListItem from './ListItem';
import AppList from '../../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../../@crema/core/AppList/ListEmptyResult';
import PropTypes from 'prop-types';
import './index.style.less';

const ProductList = ({ecommerceList, loading}) => {
  return (
    <AppList
      delay={200}
      type='alpha'
      data={ecommerceList}
      renderItem={(item) => <ListItem item={item} key={item.id} />}
      ListEmptyComponent={
        <ListEmptyResult content='No product found' loading={loading} />
      }
    />
  );
};

export default ProductList;

ProductList.propTypes = {
  ecommerceList: PropTypes.array,
  loading: PropTypes.bool,
};
