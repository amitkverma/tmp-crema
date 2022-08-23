import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppCircularProgress from '../../../../@crema/core/AppCircularProgress';
import './index.style.less';

const Revenue = () => {
  const {messages} = useIntl();

  return (
    <AppCard
      className='revenue-card'
      title={messages['eCommerce.revenue']}
      heightFull>
      <div className='revCirProgressView'>
        <AppCircularProgress
          className='appCircularProgress'
          strokeColor='#0A8FDC'
          percent={70}
          strokeWidth={5}
          format={() => (
            <div className='revCirProgressContent'>
              <div className='ant-row'>
                <span className='dollar-icon'>$</span>
                <h3>600</h3>
              </div>
              <p>Sales</p>
            </div>
          )}
        />
      </div>
      <div className='revCirProgressContentBottom'>
        <div>
          <p>$ 2,000</p>
          <span>Target</span>
        </div>
        <div>
          <p>$ 1,500</p>
          <span>Current</span>
        </div>
      </div>
    </AppCard>
  );
};

export default Revenue;
