import React, {useState} from 'react';
import {Space, Radio, Tabs} from 'antd';

const TabPane = Tabs.TabPane;

const Slide = () => {
  const [mode, setMode] = useState('top');

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <div>
        <Radio.Group
          onChange={handleModeChange}
          value={mode}
          style={{marginBottom: 8}}>
          <Radio.Button value='top'>Horizontal</Radio.Button>
          <Radio.Button value='left'>Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey='1' tabPosition={mode} style={{height: 220}}>
          {[...Array.from({length: 30}, (v, i) => i)].map((i) => (
            <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </Space>
  );
};

export default Slide;
