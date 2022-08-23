import React from 'react';
import {Slider} from 'antd';

const PriceSelector = () => {
  const [value, setValue] = React.useState([50, 400]);

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <>
      <Slider range defaultValue={value} onChange={handleChange} />

      <div className='product-sidebar-price-selector'>
        <span>$ {value[0]}</span>
        <span>$ {value[1]}</span>
      </div>
    </>
  );
};

export default PriceSelector;
