import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const NewsList = (props) => {
  const {newsData} = props;

  return (
    <List
      dataSource={newsData}
      renderItem={(news) => {
        return (
          <List.Item
            key={news.id}
            className='news-list item-hover'
            extra={<img className='news-img' src={news.image} alt='bitcoin' />}>
            <div className='news-list-content'>
              <h5>
                <span>{news.created}</span>
                <span className='text-primary'>{news.by}</span>
              </h5>
              <p>{news.news}</p>
            </div>
          </List.Item>
        );
      }}
    />
  );
};

export default NewsList;

NewsList.defaultProps = {
  newsData: [],
};

NewsList.propTypes = {
  newsData: PropTypes.array,
};
