import {Input} from 'antd';

const {TextArea} = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};

import React from 'react';

const TextareaWithCharacterCounting = () => {
  return (
    <TextArea
      showCount
      maxLength={100}
      style={{height: 120}}
      onChange={onChange}
    />
  );
};

export default TextareaWithCharacterCounting;
