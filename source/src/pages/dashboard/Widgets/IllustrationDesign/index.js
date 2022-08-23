import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppCard from '../../../../@crema/core/AppCard';
import {Divider} from 'antd';
import {EyeFilled, HeartFilled, MessageFilled} from '@ant-design/icons';
import './index.style.less';

const IllustrationDesign = () => {
  return (
    <AppCard heightFull className='no-card-space illustration-card'>
      <div className='illustration-img-header'>
        <img
          className='img-full'
          src={'/assets/images/illustration.png'}
          alt='illustration'
        />
        <span className='illustration-badge'>
          <IntlMessages id='dashboard.designs' />
        </span>
      </div>

      <div className='illustration-content'>
        <h4>
          <IntlMessages id='dashboard.illustrationDesign' />
        </h4>
        <Divider className='ill-divider' />
        <div className='illustration-action'>
          <div className='illustration-action-item'>
            <EyeFilled className='ill-middle-icon' />
            11.7 K
          </div>
          <div className='illustration-action-item'>
            <HeartFilled className='ill-middle-icon' />
            2.6 K
          </div>
          <div className='illustration-action-item'>
            <MessageFilled className='ill-middle-icon' />
            345
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default IllustrationDesign;
