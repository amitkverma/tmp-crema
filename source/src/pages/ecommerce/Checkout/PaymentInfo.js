import React, {useState} from 'react';
import AppCard from '../../../@crema/core/AppCard';
import {Button, Input, Radio} from 'antd';

const PaymentInfo = () => {
  const [paymentMode, setPaymentMode] = useState('CARD');
  return (
    <AppCard
      title={<h3 className='checkout-card-title'>Payment Info</h3>}
      actions={<Button type='primary'>Place Order</Button>}>
      <div className='payment-info-item'>
        <span onClick={() => setPaymentMode('COD')} className='pay-radio-mod'>
          <Radio checked={paymentMode === 'COD'}>COD</Radio>
        </span>
        {paymentMode === 'COD' ? (
          <div className='pay-mode-content'>
            <p>Cash on delivery</p>
          </div>
        ) : null}
      </div>
      <div className='payment-info-item'>
        <span onClick={() => setPaymentMode('CARD')} className='pay-radio-mod'>
          <Radio checked={paymentMode === 'CARD'}>CARD</Radio>
        </span>
        {paymentMode === 'CARD' ? (
          <div className='pay-mode-content'>
            <div className='form-field'>
              <Input id='user-name' placeholder='Full Name' type='search' />
            </div>
            <div className='form-field'>
              <Input id='card-number' placeholder='Card Number' type='search' />
            </div>
            <div className='pay-mode-form-field'>
              <div className='form-field'>
                <Input
                  id='expiry-date'
                  placeholder='Expiry Date (MM/YY)'
                  type='search'
                />
              </div>
              <div className='form-field'>
                <Input id='card-cvv' placeholder='CVV' type='password' />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className='payment-info-item'>
        <span
          onClick={() => setPaymentMode('PAYPAL')}
          className='pay-radio-mod'>
          <Radio checked={paymentMode === 'PAYPAL'}>PAYPAL</Radio>
        </span>
        {paymentMode === 'PAYPAL' ? (
          <div className='pay-mode-content'>
            <div className='form-field'>
              <Input
                id='paypal-email'
                placeholder='PayPal email address'
                type='search'
              />
            </div>
          </div>
        ) : null}
      </div>
    </AppCard>
  );
};

export default PaymentInfo;
