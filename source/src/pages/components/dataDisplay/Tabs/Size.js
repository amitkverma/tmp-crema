import React, {useState} from 'react';
import {Radio, Space, Tabs} from 'antd';

const {TabPane} = Tabs;

const Size = () => {
  const [size, setSize] = useState('small');

  const onChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Radio.Group value={size} onChange={onChange} style={{marginBottom: 16}}>
        <Radio.Button value='small'>Small</Radio.Button>
        <Radio.Button value='default'>Default</Radio.Button>
        <Radio.Button value='large'>Large</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey='1' size={size} style={{marginBottom: 32}}>
        <TabPane tab='Tab 1' key='1'>
          Content of tab 1
        </TabPane>
        <TabPane tab='Tab 2' key='2'>
          Content of tab 2
        </TabPane>
        <TabPane tab='Tab 3' key='3'>
          Content of tab 3
        </TabPane>
      </Tabs>
      <Tabs defaultActiveKey='1' type='card' size={size}>
        <TabPane tab='Card Tab 1' key='1'>
          Content of card tab 1
        </TabPane>
        <TabPane tab='Card Tab 2' key='2'>
          Content of card tab 2
        </TabPane>
        <TabPane tab='Card Tab 3' key='3'>
          Content of card tab 3
        </TabPane>
      </Tabs>
    </Space>
  );
};

export default Size;
