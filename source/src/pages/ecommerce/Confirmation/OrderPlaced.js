import React from 'react';
import AppCard from '../../../@crema/core/AppCard';
import {getTotalPrice} from './index';
import PropTypes from 'prop-types';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col, Button} from 'antd';
import {Link} from 'react-router-dom';

const OrderPlaced = ({cartItems}) => {
  return (
    <AppCard className='confirmation-card'>
      <AppRowContainer>
        <Col xs={24} lg={16}>
          <div className='order-placed-info'>
            <img src={'/assets/images/ecommerce/gift.png'} alt='confirm' />
            <div className='order-placed-content'>
              <h3>Order placed for ${getTotalPrice(cartItems)}!</h3>
              <p className='mb-0'>
                Your {cartItems.length} Item will be delivered by Mon, 27 Aug
                20.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className='order-placed-action'>
            <div>
              <p>Why call? Just click!</p>
              <p>Easily track all your orders! </p>
              <Button type='primary'>
                <Link to='/ecommerce/orders'>Go to My Orders</Link>
              </Button>
            </div>
            <div className='order-placed-action-thumb'>
              <img
                style={{maxHeight: 60, marginTop: 20}}
                src={'/assets/images/ecommerce/confirm-box.png'}
                alt='confirm'
              />
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default OrderPlaced;

OrderPlaced.propTypes = {
  cartItems: PropTypes.array,
};
