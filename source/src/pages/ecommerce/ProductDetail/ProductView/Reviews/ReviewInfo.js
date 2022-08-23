import React from 'react';
import AppCircularProgress from '../../../../../@crema/core/AppCircularProgress';
import {StarFilled} from '@ant-design/icons';
import {Progress} from 'antd';

const ReviewInfo = () => {
  return (
    <div className='product-detail-review-info'>
      <div className='product-detail-review-circular-progress-view'>
        <AppCircularProgress
          className='appCircularProgress'
          trailColor='#d6d6d6'
          strokeColor='#49BD65'
          percent={70}
          strokeWidth={5}
          width={150}
          format={() => (
            <div className='product-detail-review-circular-progress-inside'>
              <h3>
                4.8 <StarFilled />
              </h3>
              <p>Overall rating</p>
            </div>
          )}
        />
      </div>
      <div className='product-detail-review-content'>
        <div className='product-detail-review-item'>
          <span>5</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#49BD65'
            percent={70}
            strokeWidth={6}
            showInfo={false}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className='product-detail-review-result'>432</span>
        </div>
        <div className='product-detail-review-item'>
          <span>4</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#49BD65'
            percent={30}
            strokeWidth={6}
            showInfo={false}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className='product-detail-review-result'>122</span>
        </div>
        <div className='product-detail-review-item'>
          <span>3</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#FF9F00'
            percent={20}
            strokeWidth={6}
            showInfo={false}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className='product-detail-review-result'>20</span>
        </div>
        <div className='product-detail-review-item'>
          <span>2</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#FF9F00'
            percent={30}
            strokeWidth={6}
            showInfo={false}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className='product-detail-review-result'>3</span>
        </div>
        <div className='product-detail-review-item'>
          <span>1</span>
          <StarFilled />
          <Progress
            trailColor='#d6d6d6'
            strokeColor='#FF6161'
            percent={40}
            showInfo={false}
            strokeWidth={6}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className='product-detail-review-result'>4</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;
