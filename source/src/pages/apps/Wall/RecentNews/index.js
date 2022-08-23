import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import AppList from '../../../../@crema/core/AppList';
import NewsItem from './NewsItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';

const RecentNews = ({recentNews}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl recent-news'
      title={messages['wall.recentNews']}
      actions={[
        <span key={1} className='recent-news-link'>
          View More
        </span>,
      ]}>
      <AppList
        data={recentNews}
        renderItem={(item, index) => <NewsItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default RecentNews;

RecentNews.propTypes = {
  recentNews: PropTypes.array,
};
