import React from 'react';
import {Space, Input} from 'antd';

const {TextArea} = Input;

const TextAreas = () => {
  return (
    <Space>
      <TextArea rows={4} />
    </Space>
  );
};

export default TextAreas;
