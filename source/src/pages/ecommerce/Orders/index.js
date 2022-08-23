import React, {useEffect, useState} from 'react';
import OrderTable from './OrderTable';
import AppsContainer from '../../../@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {getRecentOrders} from '../../../redux/actions';
import AppsHeader from '../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/core/AppsContainer/AppsContent';
import AppsPagination from '../../../@crema/core/AppsPagination';
import AppInfoView from '../../../@crema/core/AppInfoView';
import {Button, Input} from 'antd';
import './index.style.less';
import {Link} from 'react-router-dom';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const Orders = () => {
  const {messages} = useIntl();
  const dispatch = useDispatch();
  const {recentOrders, orderCount} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);
  const [page, setPage] = useState(0);
  const [search, setSearchQuery] = useState('');

  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    dispatch(getRecentOrders(search, page));
  }, [dispatch, search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };
  return (
    <>
      <AppPageMetadata title='Orders' />
      <AppsContainer
        title={messages['eCommerce.recentOrders']}
        type='bottom'
        fullView>
        <AppsHeader>
          <div className='order-header'>
            <div className='order-header-input-view'>
              <Input
                id='user-name'
                placeholder='Search'
                type='search'
                onChange={onSearchOrder}
              />
            </div>
            <div className='order-header-right'>
              <Button type='primary'>
                <Link to='/ecommerce/products'>Continue Shopping</Link>
              </Button>

              <AppsPagination
                className='order-header-pagination'
                pageSize={10}
                count={orderCount}
                page={page}
                onChange={onChange}
              />
            </div>
          </div>
        </AppsHeader>

        <AppsContent
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <OrderTable loading={loading} orderData={recentOrders} />
        </AppsContent>

        <AppsPagination
          className='order-footer-pagination'
          pageSize={10}
          count={orderCount}
          page={page}
          onChange={onChange}
        />
      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default Orders;
