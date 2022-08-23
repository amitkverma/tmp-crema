import {Select} from 'antd';

const {Option, OptGroup} = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

import React from 'react';

const SearchBox = () => {
  return (
    <Select defaultValue='lucy' style={{width: 200}} onChange={handleChange}>
      <OptGroup label='Manager'>
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
      </OptGroup>
      <OptGroup label='Engineer'>
        <Option value='Yiminghe'>yiminghe</Option>
      </OptGroup>
    </Select>
  );
};

export default SearchBox;
