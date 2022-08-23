import React from 'react';
import {Space, Rate} from 'antd';

const ReadOnly = () => {
  return (
    <Space>
      <Rate disabled defaultValue={2} />
    </Space>
  );
};
export default ReadOnly;
