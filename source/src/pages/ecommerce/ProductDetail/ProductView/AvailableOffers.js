import React from 'react';
import {CalendarOutlined, TagOutlined} from '@ant-design/icons';

const AvailableOffers = () => {
  return (
    <div className='product-detail-available-offer'>
      <h3 className='product-detail-item-title'>Available offers</h3>

      <p className='product-detail-available-offer-item'>
        <span className='product-detail-available-offer-icon'>
          <TagOutlined style={{fontSize: 16}} />
        </span>
        <span className='product-detail-available-offer-item-inner'>
          <span className='product-detail-available-offer-para'>
            Special PriceGet extra ₹598 off (price inclusive of discount)
          </span>
          <span>T&C</span>
        </span>
      </p>

      <p className='product-detail-available-offer-item'>
        <span className='product-detail-available-offer-icon'>
          <CalendarOutlined style={{fontSize: 16}} />
        </span>
        <span className='product-detail-available-offer-item-inner'>
          <span className='product-detail-available-offer-para'>
            No cost EMI ₹1,368/month. Standard EMI also available
          </span>
          <span>View Plans</span>
        </span>
      </p>
    </div>
  );
};

export default AvailableOffers;
