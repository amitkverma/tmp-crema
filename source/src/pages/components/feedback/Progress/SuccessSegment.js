import React from 'react';
import {Space, Progress, Tooltip} from 'antd';

const SuccessSegment = () => {
  return (
    <Space>
      <Tooltip title='3 done / 3 in progress / 4 to do'>
        <Progress percent={60} successPercent={30} />
      </Tooltip>
    </Space>
  );
};

export default SuccessSegment;
