import React from 'react';
import PropTypes from 'prop-types';
import {List, Avatar} from 'antd';
import './index.style.less';

const NotificationCell = ({item}) => {
  return (
    <List.Item className='notificationCell'>
      <List.Item.Meta
        avatar={<Avatar src={item.image} />}
        title={item.type}
        description={
          <p>
            <span> {item.name}</span>
            {item.message}
          </p>
        }
      />
    </List.Item>
  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  item: PropTypes.object.isRequired,
};
