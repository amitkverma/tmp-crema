import React from 'react';
import {Button} from 'antd';
import {BgColorsOutlined} from '@ant-design/icons';
import './index.style.less';

export const MyPointer = () => {
  return (
    <Button className='my-pointer-btn'>
      <BgColorsOutlined />
    </Button>
  );
};

export default MyPointer;
