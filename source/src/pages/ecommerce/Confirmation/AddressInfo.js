import React from 'react';
import AppCard from '../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col, Button} from 'antd';

const AddressInfo = ({address}) => {
  return (
    <AppCard className='confirmation-card'>
      <AppRowContainer>
        <Col xs={24} lg={12}>
          <div className='confirmation-address-item'>
            <h3>Delivery Address</h3>
            <h4>{address.name}</h4>
            <p>
              {address.addressLine}, {address.city}, {address.pin}
            </p>
          </div>

          <div className='confirmation-address-item'>
            <h4>Phone number</h4>
            <p>{address.mobile}</p>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className='confirmation-address-item'>
            <h3>Your Rewards</h3>

            <div className='confirmation-address-reward'>
              <div className='confirmation-address-reward-row'>
                <img src={'/assets/images/ecommerce/sms-icon.png'} alt='sms' />
                <p className='confirmation-address-reward-title'>
                  SMS updates at every step
                </p>
              </div>
              <Button
                type='primary'
                className='confirmation-address-reward-btn'>
                Subscribe
              </Button>
            </div>

            <div className='confirmation-address-reward'>
              <div className='confirmation-address-reward-row'>
                <img
                  src={'/assets/images/ecommerce/add-person.png'}
                  alt='sms'
                />
                <p className='confirmation-address-reward-title'>
                  Order shared with 1 Person
                </p>
              </div>
              <Button
                type='primary'
                className='confirmation-address-reward-btn'>
                Manage
              </Button>
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default AddressInfo;

AddressInfo.propTypes = {
  address: PropTypes.object,
};
