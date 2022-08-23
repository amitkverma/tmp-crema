import {Input} from 'antd';

const {TextArea} = Input;

const onChange = (e) => {
  console.log(e);
};

import React from 'react';

const WithClearIcon = () => {
  return (
    <>
      <Input
        placeholder='input with clear icon'
        allowClear
        onChange={onChange}
      />
      <br />
      <br />
      <TextArea
        placeholder='textarea with clear icon'
        allowClear
        onChange={onChange}
      />
    </>
  );
};

export default WithClearIcon;
