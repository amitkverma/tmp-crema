import React from 'react';
import PropTypes from 'prop-types';
import {List, Button, Avatar} from 'antd';
import {MoreOutlined} from '@ant-design/icons';
import './index.style.less';

const CustomerItem = ({item}) => {
  const getStatusColor = () => {
    if (item.orders === 0) {
      return '#F84E4E';
    } else if (item.orders > 0) {
      return '#43C888';
    }
  };

  return (
    <List.Item className='customItem item-hover'>
      <Avatar src={item.image} />
      <div className='contentArea'>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
      </div>
      <div className='contentAction'>
        <span
          className='badgeRoot'
          style={{
            color: getStatusColor(),
            backgroundColor: getStatusColor() + '44',
          }}>
          {item.orders} orders
        </span>
        <Button onClick={null} shape='circle' icon={<MoreOutlined />} />
      </div>
    </List.Item>
  );
};

export default CustomerItem;

CustomerItem.propTypes = {
  item: PropTypes.object.isRequired,
};
