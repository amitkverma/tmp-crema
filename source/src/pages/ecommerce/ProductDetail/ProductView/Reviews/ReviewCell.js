import React from 'react';
import {Avatar, Button} from 'antd';
import {DislikeOutlined, LikeOutlined, StarFilled} from '@ant-design/icons';

const ReviewCell = () => {
  return (
    <div className='product-detail-review-cell item-hover'>
      <div className='product-detail-review-cell-info'>
        <Avatar
          className='product-detail-review-cell-avatar'
          alt='user image'
          src={'/assets/images/avatar/A1.jpg'}
        />

        <div className='product-detail-review-cell-content'>
          <h3>
            <span className='product-detail-review-cell-badge'>
              5 <StarFilled />
            </span>
            Parmar Ravikumar
          </h3>
          <p>
            If several languages coalesce, the grammar of the resulting language
          </p>
          <span className='product-detail-review-cell-time'>5 hrs ago</span>
        </div>
      </div>
      <div className='product-detail-review-cell-action'>
        <Button type='text'>
          <LikeOutlined style={{fontSize: 16}} />
        </Button>
        345
        <Button type='text'>
          <DislikeOutlined style={{fontSize: 16}} />
        </Button>
        13
      </div>
    </div>
  );
};
export default ReviewCell;
