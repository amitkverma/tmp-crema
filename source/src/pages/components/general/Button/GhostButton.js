import React from 'react';
import {Button} from 'antd';
import './index.style.less';

const GhostButton = () => {
  return (
    <div className='site-button-ghost-wrapper'>
      <Button type='primary' ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type='dashed' ghost>
        Dashed
      </Button>
    </div>
  );
};

export default GhostButton;
