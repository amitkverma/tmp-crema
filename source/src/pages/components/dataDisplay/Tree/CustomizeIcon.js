import {Tree} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import {
  DownOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled,
} from '@ant-design/icons';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <SmileOutlined />,
    children: [
      {
        title: 'leaf',
        key: '0-0-0',
        icon: <MehOutlined />,
      },
      {
        title: 'leaf',
        key: '0-0-1',
        // eslint-disable-next-line react/prop-types
        icon: ({selected}) => (selected ? <FrownFilled /> : <FrownOutlined />),
      },
    ],
  },
];

const CustomizeIcon = () => {
  return (
    <Tree
      showIcon
      defaultExpandAll
      defaultSelectedKeys={['0-0-0']}
      switcherIcon={<DownOutlined />}
      treeData={treeData}
    />
  );
};

export default CustomizeIcon;

CustomizeIcon.propTypes = {
  treeData: PropTypes.array,
};
