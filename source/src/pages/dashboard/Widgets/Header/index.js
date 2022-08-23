import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button} from 'antd';
import './index.style.less';

const Header = () => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='header-img-card'
      title={messages['dashboard.jombie']}>
      <div className='header-img-content'>
        <p>
          <IntlMessages id='dashboard.jombieContent' />
        </p>

        <div className='header-img-footer'>
          <Button type='primary' className='header-img-btn'>
            <IntlMessages id='dashboard.getStarted' />
          </Button>
          <Button className='header-img-btn btn-white-outline'>
            <IntlMessages id='dashboard.readMore' />
          </Button>
        </div>
      </div>
    </AppCard>
  );
};

export default Header;
