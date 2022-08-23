import React from 'react';
import ReviewsGraph from './ReviewsGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const Reviews = ({reviewGraphData}) => {
  return (
    <AppCard className='reviews-card'>
      <div className='reviews-content'>
        <h3>
          <IntlMessages id='common.reviews' />
        </h3>
        <h4>34,042</h4>
        <p>
          <IntlMessages id='dashboard.reviewText' />
        </p>
      </div>
      <div className='reviews-graph'>
        <ReviewsGraph reviewGraphData={reviewGraphData} />
      </div>
    </AppCard>
  );
};

export default Reviews;

Reviews.defaultProps = {
  reviewGraphData: [],
};

Reviews.propTypes = {
  reviewGraphData: PropTypes.array,
};
