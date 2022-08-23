import React from 'react';
import ProductListing from './ProductListing';
import {useIntl} from 'react-intl';
import AppsContainer from '../../../@crema/core/AppsContainer';
import ProductsSidebar from './ProductsSidebar';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const Products = () => {
  const {messages} = useIntl();
  return (
    <AppsContainer
      title={messages['sidebar.ecommerce.products']}
      sidebarContent={<ProductsSidebar />}>
      <AppPageMetadata title='Products Listing' />
      <ProductListing />
    </AppsContainer>
  );
};

export default Products;
