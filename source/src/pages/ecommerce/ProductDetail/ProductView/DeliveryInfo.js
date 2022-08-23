import React from 'react';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col, Tooltip, Input} from 'antd';
import {
  DollarOutlined,
  InfoCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const DeliveryInfo = () => {
  return (
    <AppRowContainer>
      <Col xs={24} sm={12}>
        <h3 className='product-detail-item-title'>Deliver to</h3>
        <Input
          className='deliver-input'
          id='delivery-pin-code'
          placeholder='Pin Code'
        />

        <p className='product-delivery-info-para'>
          Delivery in 5-7 days | <span className='text-green'>Free</span>
          <span className='text-secondary'>$40</span>
        </p>
        <p className='mb-0'>If ordered before 2:05 AM </p>
      </Col>

      <Col xs={24} sm={12}>
        <h3 className='product-detail-item-title'>Services</h3>

        <div className='product-detail-service'>
          <Tooltip title='Return policy'>
            <SyncOutlined style={{color: '#0A8FDC', fontSize: 14}} />
          </Tooltip>
          <p className='product-detail-service-para'>
            30 Day Return Policy
            <Tooltip title='info'>
              <InfoCircleOutlined
                style={{color: '#A0A5B9', fontSize: 14, marginLeft: 12}}
              />
            </Tooltip>
          </p>
        </div>

        <div className='product-detail-service'>
          <Tooltip title='COD Available'>
            <DollarOutlined style={{color: '#0A8FDC', fontSize: 14}} />
          </Tooltip>
          <p className='product-detail-service-para'>
            Cash on Delivery available{' '}
            <Tooltip title='info'>
              <InfoCircleOutlined
                style={{color: '#A0A5B9', fontSize: 14, marginLeft: 12}}
              />
            </Tooltip>
          </p>
        </div>
      </Col>
    </AppRowContainer>
  );
};

export default DeliveryInfo;
