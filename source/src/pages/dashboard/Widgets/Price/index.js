import React from 'react';
import {Slider} from 'antd';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';

const Price = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const {messages} = useIntl();
  return (
    <AppCard title={messages['dashboard.price']}>
      <p className='price-text'>{`$${value[0]}mi - $${value[1]}mi`}</p>

      <Slider onChange={handleChange} range defaultValue={value} />
    </AppCard>
  );
};

export default Price;
