import React, {useState} from 'react';
import {Badge, Button, Space, Switch} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import './index.style.less';

const ButtonGroup = Button.Group;

const Dynamic = () => {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const onChange = (show) => {
    setShow(show);
  };

  return (
    <Space direction='vertical'>
      <div className='ant-badge-group'>
        <Badge count={count}>
          <div className='head-example' />
        </Badge>
        <ButtonGroup>
          <Button onClick={decline}>
            <MinusOutlined />
          </Button>
          <Button onClick={increase}>
            <PlusOutlined />
          </Button>
        </ButtonGroup>
      </div>
      <div className='ant-badge-group' style={{marginTop: 10}}>
        <Badge dot={show}>
          <div className='head-example' />
        </Badge>
        <Switch onChange={onChange} checked={show} />
      </div>
    </Space>
  );
};

export default Dynamic;
