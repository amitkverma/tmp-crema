import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

const StoriesItem = ({data}) => {
  const {imgSrc, avatar, title} = data;
  return (
    <div className='stories-item-card'>
      <img className='stories-card-media' src={imgSrc} alt='Stories 1' />
      <div className='stories-user-info'>
        <Avatar
          className='stories-user-info-avatar'
          src={avatar}
          alt='Avatar'
        />
        <p className='stories-user-info-title text-truncate'>{title}</p>
      </div>
    </div>
  );
};

export default StoriesItem;

StoriesItem.propTypes = {
  data: PropTypes.object,
};
