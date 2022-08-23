import React from 'react';
import AppCard from '../../../@crema/core/AppCard';
import AppList from '../../../@crema/core/AppList';
import {getTotalPrice} from './index';
import PropTypes from 'prop-types';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Avatar, Button, Col} from 'antd';

const ItemsList = ({cartItems}) => {
  return (
    <AppCard className='confirmation-list-item-card'>
      <AppRowContainer>
        <Col xs={24} sm={12}>
          <AppList
            delay={200}
            data={cartItems}
            renderItem={(data) => (
              <div key={data.id} className='confirmation-list-item item-hover'>
                <Avatar size={40} src={data.product.image} />
                <div className='confirmation-list-item-content'>
                  <h3>
                    {data.product.title} ({data.count})
                  </h3>
                  <p>Brand: {data.product.brand}</p>
                </div>
              </div>
            )}
          />
        </Col>

        <Col xs={24} sm={12}>
          <div className='confirmation-list-item-action'>
            <h3>Total ${getTotalPrice(cartItems)}</h3>
            <div className='confirmation-list-item-action-btn-view'>
              <Button className='confirmation-list-item-action-btn btn-secondary'>
                Cancel
              </Button>
              <Button
                className='confirmation-list-item-action-btn'
                type='primary'>
                Need Help
              </Button>
            </div>
            <div className='confirmation-list-item-action-para'>
              <img src={'/assets/images/ecommerce/cart-icon.png'} alt='cart' />
              Delivery expected by 27 Jul
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default ItemsList;

ItemsList.propTypes = {
  cartItems: PropTypes.array,
};
