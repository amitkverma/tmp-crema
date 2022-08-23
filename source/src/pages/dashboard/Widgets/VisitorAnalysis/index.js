import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppCircularProgress from '../../../../@crema/core/AppCircularProgress';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import './index.style.less';

const VisitorAnalysis = () => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='visitor-analysis-card'
      title={messages['dashboard.visitorAnalysis']}
      heightFull
      actions={[
        <div key={1} className='visitor-analysis-action'>
          <span className='dot' />
          <div className='visitor-analysis-action-content'>
            <p>
              <IntlMessages id='dashboard.visitorAnalysisContent' />
            </p>
          </div>
        </div>,
      ]}>
      <div className='visitor-progress-view'>
        <AppCircularProgress
          strokeColor='#F04F47'
          trailColor='rgb(214, 214, 214)'
          percent={59}
          strokeWidth={5}
          width={200}
        />
      </div>
    </AppCard>
  );
};

export default VisitorAnalysis;
