import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import './index.style.less';

const MyProfile = ({profile}) => {
  const {profile_pic, name, designation, achievements, friends} = profile;
  const {messages} = useIntl();

  return (
    <AppCard
      className='my-profile-card'
      heightFull
      title={messages['academy.myProfile']}>
      <div className='my-profile-content'>
        <div className='my-profile-info'>
          <Avatar className='my-profile-avatar' src={profile_pic} />
          <h3 className='my-profile-title'>{name}</h3>
          <p>{designation}</p>
        </div>

        <div className='my-profile-footer'>
          <div className='my-profile-footer-item'>
            <div className='my-profile-thumb'>
              <img
                src={'/assets/images/dashboard/academy/achievements.png'}
                alt='achievements'
              />
            </div>
            <h4>{achievements}</h4>
            <p className='text-truncate'>Achievements</p>
          </div>
          <div className='my-profile-footer-item'>
            <div className='my-profile-icon'>
              <UserOutlined style={{fontSize: 34, color: '#FD3A84'}} />
            </div>
            <h4>{friends}</h4>
            <p className='text-truncate'>Friends</p>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default MyProfile;

MyProfile.defaultProps = {};

MyProfile.propTypes = {
  profile: PropTypes.object,
};
