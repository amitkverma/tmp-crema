import React from 'react';
import {Space, Rate} from 'antd';
import HeartOutlined from '@ant-design/icons/lib/icons/HeartOutlined';

const OtherCharactor = () => {
  return (
    <Space wrap>
      <Rate character={<HeartOutlined />} allowHalf />
      <br />
      <Rate character='A' allowHalf style={{fontSize: 36}} />
      <br />
      <Rate character='好' allowHalf />
    </Space>
  );
};

export default OtherCharactor;
