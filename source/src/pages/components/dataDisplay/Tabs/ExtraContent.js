import React from 'react';
import {Tabs, Button, Divider, Checkbox} from 'antd';

const {TabPane} = Tabs;

const CheckboxGroup = Checkbox.Group;

const operations = <Button>Extra Action</Button>;

const OperationsSlot = {
  left: <Button className='tabs-extra-demo-button'>Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

const options = ['left', 'right'];

const ExtraContent = () => {
  const [position, setPosition] = React.useState(['left', 'right']);

  const slot = React.useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({...acc, [direction]: OperationsSlot[direction]}),
      {},
    );
  }, [position]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
      <Tabs tabBarExtraContent={operations}>
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
      <br />
      <br />
      <br />
      <div>You can also specify its direction or both side</div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value);
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot}>
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
    </div>
  );
};
export default ExtraContent;
