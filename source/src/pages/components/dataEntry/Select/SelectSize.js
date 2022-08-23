import React from 'react';
import {Radio, Select, Space} from 'antd';

import './selectSize.style.less';

const {Option} = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const SeclectSize = () => {
  const [size, setSize] = React.useState('default');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <Space direction='vertical'>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value='large'>Large</Radio.Button>
        <Radio.Button value='default'>Default</Radio.Button>
        <Radio.Button value='small'>Small</Radio.Button>
      </Radio.Group>

      <Select
        size={size}
        defaultValue='a1'
        onChange={handleChange}
        style={{width: 200}}>
        {children}
      </Select>

      <Select
        mode='multiple'
        size={size}
        placeholder='Please select'
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{width: '100%'}}>
        {children}
      </Select>

      <Select
        mode='tags'
        size={size}
        placeholder='Please select'
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{width: '100%'}}>
        {children}
      </Select>
    </Space>
  );
};

export default SeclectSize;
