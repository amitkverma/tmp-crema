import React from 'react';
import {Space} from 'antd';
import {Mentions} from 'antd';

const {Option} = Mentions;

const Placement = () => {
  return (
    <Space>
      <Mentions autoSize style={{width: '100%'}}>
        <Option value='afc163'>afc163</Option>
        <Option value='zombieJ'>zombieJ</Option>
        <Option value='yesmeck'>yesmeck</Option>
      </Mentions>
    </Space>
  );
};
export default Placement;
