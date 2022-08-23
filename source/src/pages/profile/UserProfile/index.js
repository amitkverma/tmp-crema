import React from 'react';
import './index.style.less';
import {Tabs} from 'antd';
import PersonalInfo from './PersonalInfo';
import ChangePassword from './ChangePassword';
import Information from './Information';
import Notification from './Notification';
import SocialLink from './SocialLink';

import {HiUser} from 'react-icons/hi';
import {AiFillLock} from 'react-icons/ai';
import {FaBandcamp, FaNetworkWired} from 'react-icons/fa';
import {IoMdNotifications} from 'react-icons/io';
import accountData from '../../../@crema/services/db/account';
import IntlMessages from '../../../@crema/utility/IntlMessages';

const UserProfile = () => {
  const TabPane = Tabs.TabPane;
  return (
    <div className='user-profile-container'>
      <Tabs
        className='user-profile-tabs'
        defaultActiveKey='1'
        tabPosition='left'>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <HiUser className='icon' />
              <span>
                <IntlMessages id='userProfile.personalInfo' />
              </span>
            </span>
          }
          key='1'>
          <PersonalInfo />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <AiFillLock className='icon' />
              <span>
                <IntlMessages id='userProfile.changePassword' />
              </span>
            </span>
          }
          key='2'>
          <ChangePassword />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <FaBandcamp className='icon' />
              <span>
                <IntlMessages id='userProfile.information' />
              </span>
            </span>
          }
          key='3'>
          <Information />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <FaNetworkWired className='icon' />
              <span>
                <IntlMessages id='userProfile.social' />
              </span>
            </span>
          }
          key='4'>
          <SocialLink socialLink={accountData.member} />
        </TabPane>
        <TabPane
          tab={
            <span className='user-profile-icon'>
              <IoMdNotifications className='icon' />
              <span>
                <IntlMessages id='userProfile.notification' />
              </span>
            </span>
          }
          key='5'>
          <Notification notification={accountData.notification} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UserProfile;
