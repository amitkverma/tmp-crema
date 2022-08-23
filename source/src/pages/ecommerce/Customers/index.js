import React, {useEffect, useState} from 'react';
import CustomerTable from './CustomerTable';
import AppsContainer from '../../../@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {getCustomers} from '../../../redux/actions';
import AppsHeader from '../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/core/AppsContainer/AppsContent';
import AppsPagination from '../../../@crema/core/AppsPagination';
import AppInfoView from '../../../@crema/core/AppInfoView';
import {Input, Button, Modal} from 'antd';
import './index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import EditCustomer from './EditCustomer';

const Customers = () => {
  const {messages} = useIntl();
  const dispatch = useDispatch();
  const {customers, customerCount} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);
  const [page, setPage] = useState(0);
  const [search, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    dispatch(getCustomers(search, page));
  }, [dispatch, search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AppPageMetadata title='Customers' />
      <AppsContainer
        title={messages['sidebar.ecommerce.customers']}
        fullView
        type='bottom'>
        <AppsHeader key={'wrap'}>
          <div className='customer-header'>
            <div className='customer-header-input-view'>
              <Input
                id='user-name'
                placeholder='Search'
                type='search'
                onChange={onSearchOrder}
              />
            </div>
            <div className='customer-header-right'>
              <Button type='primary' onClick={showModal}>
                Add Customer
              </Button>

              <AppsPagination
                className='customer-header-pagination'
                pageSize={10}
                count={customerCount}
                page={page}
                onChange={onChange}
              />
            </div>
          </div>
        </AppsHeader>

        <AppsContent
          key={'wrap1'}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <CustomerTable loading={loading} customers={customers} />
        </AppsContent>

        <AppsPagination
          key={'wrap2'}
          className='customer-footer-pagination'
          pageSize={10}
          count={customerCount}
          page={page}
          onChange={onChange}
        />
      </AppsContainer>

      <Modal
        title={messages['ecommerce.addCustomer']}
        visible={isModalVisible}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}>
        <EditCustomer />
      </Modal>

      <AppInfoView />
    </>
  );
};

export default Customers;
