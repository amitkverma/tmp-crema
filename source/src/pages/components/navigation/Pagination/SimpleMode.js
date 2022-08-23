import React from 'react';
import {Space, Pagination} from 'antd';

const SimpleMode = () => {
  return (
    <Space>
      <Pagination simple defaultCurrent={2} total={50} />
      <br />
      <Pagination disabled simple defaultCurrent={2} total={50} />
    </Space>
  );
};

export default SimpleMode;
