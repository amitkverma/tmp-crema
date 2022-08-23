import React from 'react';
import NewsList from './NewsList';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {useIntl} from 'react-intl';

const LatestNews = (props) => {
  const {newsData} = props;

  const {messages} = useIntl();

  return (
    <AppCard
      className='no-card-space-ltr-rtl latest-news-card'
      heightFull
      title={messages['dashboard.latestNews']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}>
      <NewsList newsData={newsData} />
    </AppCard>
  );
};

export default LatestNews;

LatestNews.defaultProps = {
  newsData: [],
};

LatestNews.propTypes = {
  newsData: PropTypes.array,
};
