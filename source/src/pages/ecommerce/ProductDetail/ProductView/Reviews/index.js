import React from 'react';
import AppList from '../../../../../@crema/core/AppList';
import ReviewCell from './ReviewCell';
import {Divider} from 'antd';
import ReviewInfo from './ReviewInfo';

const Review = () => {
  return (
    <div>
      <h3 className='product-detail-item-title'>Reviews</h3>
      <ReviewInfo />
      <Divider style={{marginTop: 15, marginBottom: 15}} />
      <AppList
        data={[1, 2, 3, 4, 5]}
        renderItem={(data) => <ReviewCell key={data} />}
      />
    </div>
  );
};

export default Review;
