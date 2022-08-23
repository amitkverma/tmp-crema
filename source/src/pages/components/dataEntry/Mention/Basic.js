import React from 'react';
import {Space} from 'antd';
import {Mentions} from 'antd';

const {Option} = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}
const Basic = () => {
  return (
    <Space>
      <Mentions
        style={{width: '100%'}}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue='@afc163'>
        <Option value='afc163'>afc163</Option>
        <Option value='zombieJ'>zombieJ</Option>
        <Option value='yesmeck'>yesmeck</Option>
      </Mentions>
    </Space>
  );
};

export default Basic;
