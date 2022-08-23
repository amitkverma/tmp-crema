import {Badge, Avatar} from 'antd';

import React from 'react';

const Offset = () => {
  return (
    <Badge count={5} offset={[10, 10]}>
      <Avatar shape='square' size='large' />
    </Badge>
  );
};

export default Offset;
