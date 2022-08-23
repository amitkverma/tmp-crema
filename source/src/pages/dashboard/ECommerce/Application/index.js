import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppCircularProgress from '../../../../@crema/core/AppCircularProgress';
import '../SaleStatics/index.style.less';

const Application = () => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['eCommerce.application']} heightFull>
      <div className='chartContainerView'>
        <div className='chartContainer'>
          <AppCircularProgress
            className='appCircularProgress'
            strokeColor='#49BD65'
            percent={70}
            strokeWidth={5}
            format={() => (
              <img
                alt='icon'
                style={{
                  borderRadius: '50%',
                  boxShadow: '0px 10px 20px rgba(160, 165, 185, 0.2)',
                }}
                src={'/assets/images/dashboard/application_icon.png'}
              />
            )}
          />
        </div>
        <div className='chartContainerAction'>
          <div className='chart-action-item'>
            <span className='dot' style={{backgroundColor: '#49BD65'}} />
            <p>Android</p>
          </div>
          <div className='chart-action-item'>
            <span className='dot' style={{backgroundColor: '#d6d6d6'}} />
            <p>IOS</p>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default Application;
