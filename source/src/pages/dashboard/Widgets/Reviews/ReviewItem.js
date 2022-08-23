import React from 'react';
import PropTypes from 'prop-types';
import {Rate, List} from 'antd';
import './index.style.less';

const ReviewItem = ({item}) => {
  return (
    <List.Item className='review-item item-hover' key={item.id}>
      <div className='review-item-header'>
        <Rate value={item.rating} readOnly />
        <span className='review-time'>{item.time}</span>
      </div>
      <p>{item.content}</p>
      <span className='review-item-by'>- {item.by}</span>
    </List.Item>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};
