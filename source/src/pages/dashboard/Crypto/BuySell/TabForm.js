import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';
import './index.style.less';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const TabForm = (props) => {
  const {data} = props;

  const [inputValue, setValue] = useState(data.value);
  const [inputPrice, setPrice] = useState(data.price);
  const [inputAmount, setAmount] = useState(data.amount);

  return (
    <>
      <form className='tab-form' noValidate autoComplete='off'>
        <div className='form-field'>
          <p className='tab-form-right-text'>
            <IntlMessages id='dashboard.btc' />
          </p>
          <Input
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Value'
          />
        </div>
        <div className='form-field'>
          <p className='tab-form-right-text'>
            <IntlMessages id='dashboard.btc' />
          </p>
          <Input
            value={inputPrice}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Price'
          />
        </div>
        <div className='form-field'>
          <p className='tab-form-right-text'>
            <IntlMessages id='dashboard.btc' />
          </p>
          <Input
            value={inputAmount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Amount'
          />
        </div>
      </form>
    </>
  );
};

export default TabForm;

TabForm.defaultProps = {
  data: {
    value: '',
    price: '',
    amount: '',
  },
};

TabForm.propTypes = {
  data: PropTypes.object,
};
