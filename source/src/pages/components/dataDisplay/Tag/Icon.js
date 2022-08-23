import {Tag} from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import React from 'react';

const Icon = () => {
  return (
    <>
      <Tag icon={<TwitterOutlined />} color='#55acee'>
        Twitter
      </Tag>
      <Tag icon={<YoutubeOutlined />} color='#cd201f'>
        Youtube
      </Tag>
      <Tag icon={<FacebookOutlined />} color='#3b5999'>
        Facebook
      </Tag>
      <Tag icon={<LinkedinOutlined />} color='#55acee'>
        LinkedIn
      </Tag>
    </>
  );
};

export default Icon;
