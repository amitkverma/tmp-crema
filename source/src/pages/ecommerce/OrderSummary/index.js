import React from 'react';
import AppCard from '../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Divider} from 'antd';
import './index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const getTotalPrice = (cartItems) => {
  let total = 0;
  cartItems.map((data) => {
    total = total + +data.price.mrp * +data.count;
    return data;
  });
  return total;
};

const getTotalDiscount = (cartItems) => {
  let total = 0;
  cartItems.map((data) => {
    total = total + +data.price.discount * +data.count;
    return data;
  });
  return total;
};

const OrderSummary = ({cartItems}) => {
  const {messages} = useIntl();
  const totalPrice = getTotalPrice(cartItems);
  const totalDiscount = getTotalDiscount(cartItems);
  return (
    <AppCard title={messages['ecommerce.orderSummary']}>
      <AppPageMetadata title='Order Summery' />
      <div className='order-summary-item'>
        <p>Grand Total: </p>
        <span>${totalPrice}</span>
      </div>
      <div className='order-summary-item'>
        <p>Discount: </p>
        <span>${totalDiscount}</span>
      </div>
      <div className='order-summary-item'>
        <p>Shipping Charge: </p>
        <span>$4</span>
      </div>
      <div className='order-summary-item'>
        <p>Estimated Tax: </p>
        <span>$0</span>
      </div>

      <Divider className='order-summary-divider' />

      <div className='order-summary-item'>
        <p>Order Total: </p>
        <span>${totalPrice - totalDiscount + 4}</span>
      </div>
    </AppCard>
  );
};

export default OrderSummary;

OrderSummary.propTypes = {
  cartItems: PropTypes.array,
};
