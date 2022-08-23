import React from 'react';
import {Space, Rate} from 'antd';

const ClearStar = () => {
  return (
    <Space wrap>
      <Rate defaultValue={3} />
      <span className='ant-rate-text'>allowClear: true</span>
      <br />
      <Rate allowClear={false} defaultValue={3} />
      <span className='ant-rate-text'>allowClear: false</span>
    </Space>
  );
};

export default ClearStar;
