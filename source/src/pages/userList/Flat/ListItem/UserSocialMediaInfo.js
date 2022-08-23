import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {TwitterOutlined} from '@ant-design/icons';
import {FaFacebookF} from 'react-icons/fa';

const UserSocialMediaInfo = ({user}) => {
  return (
    <div className='user-flat-social-info'>
      <div className='user-flat-social-info-item user-flat-social-info-item-text'>
        <span>{user.readTime}</span>
        <IntlMessages id='common.read' />
      </div>
      <div className='user-flat-social-info-item'>
        <span>
          <FaFacebookF />
        </span>
        <span>{user.shares}</span>
        <IntlMessages id='common.shares' />
      </div>
      <div className='user-flat-social-info-item'>
        <span>
          <TwitterOutlined />
        </span>
        <span>{user.retweets}</span>
        <IntlMessages id='common.retweets' />
      </div>
    </div>
  );
};

export default UserSocialMediaInfo;

UserSocialMediaInfo.propTypes = {
  user: PropTypes.object.isRequired,
};
