import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppCard from '../../../../@crema/core/AppCard';
import {
  EyeFilled,
  HeartFilled,
  HeartOutlined,
  MessageFilled,
} from '@ant-design/icons';
import {Avatar} from 'antd';
import './index.style.less';

const WallPaper = () => {
  return (
    <AppCard heightFull className='wallpaper-card background-image'>
      <div className='wallpaper-header'>
        <h3 className='text-uppercase'>
          <IntlMessages id='dashboard.latestPost' />
        </h3>
        <div className='wallpaper-header-action'>
          <HeartOutlined />
        </div>
      </div>

      <div className='wallpaper-content'>
        <Avatar
          className='wallpaper-avatar'
          src={'/assets/images/avatar/A1.jpg'}
        />

        <h1 className='wallpaper-title'>
          <IntlMessages id='dashboard.hdColorful' />
        </h1>
        <h1 className='wallpaper-title'>
          <IntlMessages id='dashboard.wallpaperFree' />
        </h1>

        <div className='wallpaper-content-footer'>
          <h1 className='wallpaper-title'>
            <IntlMessages id='common.download' />
          </h1>
          <div className='wallpaper-content-action'>
            <span className='wallpaper-content-action-item'>
              <EyeFilled className='middle-icon' /> 11.7 K
            </span>
            <span className='wallpaper-content-action-item'>
              <HeartFilled className='middle-icon' /> 2.6 K
            </span>
            <span className='wallpaper-content-action-item'>
              <MessageFilled className='middle-icon' /> 345
            </span>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default WallPaper;
