import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../@crema/core/AppTableContainer';
import OrderActions from './OrderActions';

const OrderTable = ({orderData, loading}) => {
  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Pending': {
        return '#E2A72E';
      }
      case 'Delivered': {
        return '#43C888';
      }
      default: {
        return '#F84E4E';
      }
    }
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <span className='order-id'>{id}</span>,
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Delivery Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentType',
      key: 'paymentType',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span
          className='badge'
          style={{
            color: getPaymentStatusColor(status),
            backgroundColor: getPaymentStatusColor(status) + '44',
          }}>
          {status}
        </span>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      className: 'order-table-action',
      fixed: 'right',
      render: () => <OrderActions />,
    },
  ];
  return (
    <AppTableContainer
      className='order-table'
      hoverColor
      data={orderData}
      loading={loading}
      columns={columns}
      scroll={{x: 'auto'}}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
  loading: PropTypes.bool,
};
