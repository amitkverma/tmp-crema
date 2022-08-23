import React from 'react';
import {Space, Button} from 'antd';
import './Align.less';

const Align = () => {
  return (
    <div
      style={{display: 'inline-block', boxSizing: 'border-box', width: '300'}}
      className='space-align-container'>
      <div className='space-align-block'>
        <Space align='center'>
          center
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
      <div className='space-align-block'>
        <Space align='start'>
          start
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
      <div className='space-align-block'>
        <Space align='end'>
          end
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
      <div className='space-align-block'>
        <Space align='baseline'>
          baseline
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
    </div>
  );
};

export default Align;
