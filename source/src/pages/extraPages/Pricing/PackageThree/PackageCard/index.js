import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, List} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import './index.style.less';

const PackageCard = ({pricing}) => {
  return (
    <Card className='pricing-three-card'>
      <div className='pricing-three-content'>
        <h5 className='pricing-three-title'>{pricing.title}</h5>
        <List className='pricing-three-card-list'>
          {pricing.pricingList.map((data, index) => (
            <List.Item key={index}>
              <CheckOutlined className='icon' />
              <p>{data.title}</p>
            </List.Item>
          ))}
        </List>
        <div className='pricing-three-card-pricing-value'>
          <h3>
            <span className='price'>${pricing.price}</span>
            /month
          </h3>
        </div>
      </div>
      <div className='pricing-three-btn-view'>
        <Button
          className='pricing-three-btn'
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
