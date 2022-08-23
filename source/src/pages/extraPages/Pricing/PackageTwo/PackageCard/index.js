import React from 'react';
import {Button, List, Card} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import './index.style.less';

const PackageCard = ({pricing}) => {
  return (
    <Card className='pricing-two-card'>
      <div className='pricing-two-card-header'>
        <h5 className='pricing-two-card-header-title'>{pricing.title}</h5>
        <p>{pricing.description}</p>
      </div>
      <div className='pricing-two-card-value'>
        <div className='pricing-two-card-pricing-value'>
          <h3>
            <span className='dollar'>$</span>
            <span
              className='price'
              style={{
                color: pricing.priceColor,
              }}>
              {pricing.price}
            </span>
            /month
          </h3>
        </div>
        <p>{pricing.priceDescription}</p>
      </div>
      <div className='pricing-two-card-content'>
        <List className='pricing-two-card-list'>
          {pricing.pricingList.map((data, index) => (
            <List.Item key={index}>
              <CheckOutlined className='icon' />
              <p>{data.title}</p>
            </List.Item>
          ))}
        </List>
        <div className='pricing-two-card-btn-view'>
          <Button
            className='pricing-two-card-btn'
            style={{
              backgroundColor: pricing.priceColor,
              color: 'white',
              borderColor: pricing.priceColor,
            }}>
            Get started
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  pricing: PropTypes.object,
};
