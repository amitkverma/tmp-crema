import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {List} from 'antd';
import './index.style.less';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const Reviews = (props) => {
  const {data} = props;
  const {messages} = useIntl();

  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['common.reviews']}>
      <AppScrollbar className='review-scrollbar'>
        <List
          dataSource={data}
          renderItem={(item) => {
            return <ReviewItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Reviews;

Reviews.defaultProps = {
  data: [],
};

Reviews.propTypes = {
  data: PropTypes.array,
};
