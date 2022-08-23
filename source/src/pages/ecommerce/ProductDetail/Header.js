import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import PropTypes from 'prop-types';
import {Rate} from 'antd';

const Header = ({product}) => {
  const shareUrl = 'http://crema-react.firebaseapp.com/';

  return (
    <div className='product-detail-header'>
      <div className='product-detail-header-info'>
        <h3>{product.title}</h3>
        <div className='product-detail-header-content'>
          <Rate defaultValue={product.rating} readOnly />
          <span className='product-review-text'>
            {product.reviews + ' reviews'}
          </span>

          <span>
            SKU : <span className='product-mb-text'>MB023</span>
          </span>
        </div>
      </div>

      <div className='product-detail-social'>
        <LinkedinShareButton url={shareUrl} style={{marginRight: 10}}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton url={shareUrl} style={{marginRight: 10}}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  product: PropTypes.object,
};
