import {Select} from 'antd';

const {Option} = Select;

import React from 'react';

const BorderedLess = () => {
  return (
    <>
      <Select defaultValue='lucy' style={{width: 120}} bordered={false}>
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='Yiminghe'>yiminghe</Option>
      </Select>
      <Select
        defaultValue='lucy'
        style={{width: 120}}
        disabled
        bordered={false}>
        <Option value='lucy'>Lucy</Option>
      </Select>
    </>
  );
};

export default BorderedLess;
