import React from 'react';
import PropTypes from 'prop-types';
import {CheckCircleOutlined} from '@ant-design/icons';
import {Avatar, Button} from 'antd';

const FollowItem = ({item}) => {
  return (
    <div className='item-hover follow-item'>
      <Avatar className='follow-avatar' src={item.profilePic} />
      <div className='follow-item-info'>
        <div className='follow-item-content'>
          <div className='follow-item-content-title'>
            <h5>{item.title}</h5>
            <CheckCircleOutlined className='follow-item-icon' />
          </div>
          <p>{item.subTitle}</p>
        </div>
        <Button className='follow-item-btn'>Follow</Button>
      </div>
    </div>
  );
};

export default FollowItem;

FollowItem.propTypes = {
  item: PropTypes.object,
};
