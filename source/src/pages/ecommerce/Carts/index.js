import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CartTable from './CartTable';
import AppCard from '../../../@crema/core/AppCard';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {getCartItems} from '../../../redux/actions';
import OrderSummary from '../OrderSummary';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Button, Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import './index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import QueueAnim from 'rc-queue-anim';

const Carts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cartItems} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <>
      <AppPageMetadata title='Carts' />
      <QueueAnim style={{zIndex: 3}} type='scale'>
        <h2 className='page-title' key='title'>
          <IntlMessages id='sidebar.ecommerce.cart' />
        </h2>
      </QueueAnim>
      <AppRowContainer>
        <Col xs={24} lg={16}>
          <AppAnimateGroup type='left'>
            <AppCard
              key='a'
              className='no-card-space-ltr-rtl'
              actions={[
                <span key={1} className='carts-footer'>
                  <Button
                    type='primary'
                    onClick={() => {
                      navigate('/ecommerce/products');
                    }}>
                    Continue Shopping
                  </Button>
                  <Button
                    type='primary'
                    className='btn-secondary'
                    onClick={() => {
                      navigate('/ecommerce/checkout');
                    }}>
                    Checkout
                  </Button>
                </span>,
              ]}>
              <CartTable cartItems={cartItems} loading={loading} />
            </AppCard>
          </AppAnimateGroup>
        </Col>

        <Col xs={24} lg={8}>
          <AppAnimateGroup type='right'>
            <OrderSummary cartItems={cartItems} key='b' />{' '}
          </AppAnimateGroup>
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Carts;
