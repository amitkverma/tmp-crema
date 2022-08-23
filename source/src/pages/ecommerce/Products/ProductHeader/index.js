import React from 'react';
import {useDispatch} from 'react-redux';
import {setViewType} from '../../../../redux/actions/Ecommerce';
import {VIEW_TYPE} from '../../../../redux/reducers/Ecommerce';
import PropTypes from 'prop-types';
import {Button, Input} from 'antd';
import {AppstoreOutlined, UnorderedListOutlined} from '@ant-design/icons';
import clsx from 'clsx';
import './index.style.less';

const ProductHeader = ({onChange, viewType}) => {
  const dispatch = useDispatch();

  const {Search} = Input;

  return (
    <div className='product-header'>
      <div className='product-header-left'>
        <h3>Watches</h3>
        <span className='product-header-showing-text text-truncate'>
          (Showing 1 – 40 products of 93,723 products)
        </span>
      </div>
      <div className='product-header-right'>
        <Search
          className='product-header-search'
          placeholder='Search here'
          onChange={(e) => onChange(e.target.value)}
        />

        <Button
          className={clsx('product-header-btn', {
            active: viewType === VIEW_TYPE.LIST,
          })}
          onClick={() => dispatch(setViewType(VIEW_TYPE.LIST))}>
          <UnorderedListOutlined />
        </Button>
        <Button
          className={clsx('product-header-btn', {
            active: viewType === VIEW_TYPE.GRID,
          })}
          onClick={() => dispatch(setViewType(VIEW_TYPE.GRID))}>
          <AppstoreOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;

ProductHeader.propTypes = {
  viewType: PropTypes.any,
  onChange: PropTypes.func,
};
