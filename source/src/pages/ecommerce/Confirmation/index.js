import React from 'react';
import OrderPlaced from './OrderPlaced';
import AddressInfo from './AddressInfo';
import {addresses} from '../../../@crema/services/db/ecommerce/ecommerceData';
import {useSelector} from 'react-redux';
import ItemsList from './ItemsList';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import './index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

export const getTotalPrice = (cartItems) => {
  let total = 4;
  cartItems.map((data) => {
    total = total + (+data.price.mrp - +data.price.discount) * +data.count;
    return data;
  });
  return total;
};

const Confirmation = () => {
  const {cartItems} = useSelector(({ecommerce}) => ecommerce);
  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Order Confirmation' />
      <div className='confirmation-view' key={'wrap'}>
        <OrderPlaced cartItems={cartItems} />
        <AddressInfo address={addresses[0]} />
        <ItemsList cartItems={cartItems} />
      </div>
    </AppAnimateGroup>
  );
};

export default Confirmation;
