import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

const NewsItem = ({item}) => {
  return (
    <div className='recent-news-item item-hover'>
      <Avatar className='recent-news-avatar' src={item.user.profilePic} />
      <div className='recent-news-item-content'>
        <h4>{item.title}</h4>
        <p>
          {item.desc}
          <span className='recent-news-item-link'>Read More</span>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  item: PropTypes.object,
};
