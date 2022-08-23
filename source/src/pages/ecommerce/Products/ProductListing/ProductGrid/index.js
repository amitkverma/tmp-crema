import React from 'react';
import AppGrid from '../../../../../@crema/core/AppGrid';
import GridItem from './GridItem';
import ListEmptyResult from '../../../../../@crema/core/AppList/ListEmptyResult';
import PropTypes from 'prop-types';
import './index.style.less';

const ProductGrid = ({ecommerceList, loading}) => (
  <AppGrid
    itemPadding={8}
    delay={200}
    responsive={{
      xs: 1,
      sm: 2,
      xxl: 3,
    }}
    data={ecommerceList}
    renderItem={(item) => <GridItem item={item} key={item.id} />}
    ListEmptyComponent={
      <ListEmptyResult content='No product found' loading={loading} />
    }
  />
);
export default ProductGrid;

ProductGrid.propTypes = {
  ecommerceList: PropTypes.array,
  loading: PropTypes.bool,
};
