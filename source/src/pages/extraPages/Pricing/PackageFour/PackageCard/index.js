import React from 'react';
import PropTypes from 'prop-types';
import {Button, List, Card} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import './index.style.less';

const PackageCard = ({pricing}) => {
  return (
    <Card className='pricing-four-card'>
      <div className='pricing-four-content'>
        <div className='pricing-four-card-header'>
          <div
            className='pricing-four-card-pricing-circle'
            style={{backgroundColor: pricing.priceColor}}>
            <h3>
              <span className='price'>${pricing.price}</span>
              /month
            </h3>
            <h5>{pricing.title}</h5>
          </div>
        </div>
        <List className='pricing-four-card-list'>
          {pricing.pricingList.map((data, index) => (
            <List.Item key={index}>
              <CheckOutlined className='icon' />
              <p>{data.title}</p>
            </List.Item>
          ))}
        </List>
      </div>
      <div className='pricing-four-btn-view'>
        <Button
          className='pricing-four-btn'
          style={{backgroundColor: pricing.priceColor}}>
          Get started
        </Button>
      </div>
    </Card>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  pricing: PropTypes.object,
};
