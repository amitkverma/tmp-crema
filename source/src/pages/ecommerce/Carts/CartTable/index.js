import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Table} from 'antd';
import '../index.style.less';
import {removeCartItem, updateCartItem} from '../../../../redux/actions';
import {useDispatch} from 'react-redux';
import {
  MinusOutlined,
  CloseCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const CartTable = ({cartItems, loading}) => {
  const dispatch = useDispatch();
  const {Column, ColumnGroup} = Table;

  const onRemoveItem = (product) => {
    dispatch(removeCartItem(product));
  };

  const onDecrement = (product) => {
    if (product.count > 0) {
      dispatch(updateCartItem({...product, count: product.count - 1}));
    } else {
      dispatch(removeCartItem(product));
    }
  };
  const onIncrement = (product) => {
    dispatch(updateCartItem({...product, count: product.count + 1}));
  };

  return (
    <Table
      className='cart-table'
      loading={loading}
      dataSource={cartItems}
      pagination={false}>
      <ColumnGroup>
        <Column
          title='Product'
          dataIndex='product'
          key='product'
          render={(product) => (
            <div className='cart-user'>
              <Avatar src={product.image} />
              <div className='cart-user-info'>
                <h3>{product.title}</h3>
                <p>Brand: {product.brand}</p>
              </div>
            </div>
          )}
        />
        <Column
          title='Unit Price'
          dataIndex='price'
          key='price'
          render={(price) => <>${+price.mrp - +price.discount}</>}
        />
        <Column
          title='QTY'
          dataIndex='count'
          key='count'
          render={(count, record) => (
            <div className='cart-inc-dec'>
              <PlusOutlined
                className='pointer'
                onClick={() => onIncrement(record)}
              />
              <span>{count}</span>
              <MinusOutlined
                className='pointer'
                onClick={() => onDecrement(record)}
              />
            </div>
          )}
        />
        <Column
          title='Total'
          dataIndex='total'
          key='total'
          render={(total) => (
            <span>${(+total.mrp - +total.discount) * +total.count}</span>
          )}
        />
        <Column
          title=''
          dataIndex='close'
          key='close'
          render={(_, record) => (
            <span onClick={() => onRemoveItem(record)}>
              <CloseCircleOutlined style={{fontSize: 18, cursor: 'pointer'}} />
            </span>
          )}
        />
      </ColumnGroup>
    </Table>
  );
};

export default CartTable;

CartTable.propTypes = {
  cartItems: PropTypes.array,
  loading: PropTypes.bool,
};
