import React from 'react';
import {Space, Select} from 'antd';

const {Option} = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const SelectMultiple = () => {
  return (
    <Space>
      <Select
        mode='multiple'
        allowClear
        style={{width: '100%'}}
        placeholder='Please select'
        defaultValue={['a10', 'c12']}
        onChange={handleChange}>
        {children}
      </Select>
      <br />
      <Select
        mode='multiple'
        disabled
        style={{width: '100%'}}
        placeholder='Please select'
        defaultValue={['a10', 'c12']}
        onChange={handleChange}>
        {children}
      </Select>
    </Space>
  );
};

export default SelectMultiple;
