import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {Avatar} from 'antd';
import './index.style.less';

const ProfileCard = () => {
  return (
    <AppCard>
      <div className='profile-content'>
        <Avatar
          style={{height: 80, width: 80}}
          src={'/assets/images/avatar/A10.jpg'}
        />
        <h5 className='title'>Talan Phips</h5>

        <div className='profile-content-action'>
          <div className='profile-action-item'>
            <div className='profile-action-item-content profile-right-border'>
              <h5>24</h5>
              <p>Years</p>
            </div>
            <div className='profile-action-item-content'>
              <h5>A+</h5>
              <p>Blood</p>
            </div>
          </div>
          <div className='profile-top-border profile-action-item'>
            <div className='profile-action-item-content profile-right-border'>
              <h5>185 cm</h5>
              <p>Height</p>
            </div>
            <div className='profile-action-item-content'>
              <h5>84 kg</h5>
              <p>Weight</p>
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default ProfileCard;
