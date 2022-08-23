import React from 'react';
import './index.style.less';
import {CheckOutlined, HeartFilled} from '@ant-design/icons';
import {Button, List} from 'antd';
import PropTypes from 'prop-types';

const PackageCard = ({pricing}) => {
  return (
    <div className='pricing-wrapper'>
      <span
        className='tag'
        style={{
          backgroundColor: pricing.tagColor,
          color: 'white',
        }}>
        {pricing.tag}
      </span>
      <div className='pricing-one-card'>
        <div className='pricing-one-card-header'>
          <h3 className='pricing-one-card-header-title'>{pricing.title}</h3>
          <h4 className='pricing-one-card-header-subtitle'>
            <span>${pricing.price}</span>
            /month
          </h4>
          {pricing.popular ? (
            <div className='popular'>
              <HeartFilled />
              <p style={{}}>{pricing.popular}</p>
            </div>
          ) : null}
        </div>
        <div className='pricing-one-btn-view'>
          <Button
            className='pricing-one-btn'
            style={{borderColor: pricing.tagColor}}>
            Start Trial
          </Button>
        </div>
        <List className='pricing-one-card-list'>
          {pricing.pricingList.map((data, index) => (
            <List.Item key={index}>
              <CheckOutlined className='icon' />
              <p>{data.title}</p>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default PackageCard;

PackageCard.propTypes = {
  pricing: PropTypes.object,
};
