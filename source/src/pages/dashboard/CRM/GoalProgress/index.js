import React from 'react';
import GoalProgressGraph from './GoalProgressGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {useIntl} from 'react-intl';

const GoalProgress = ({progressGraphData}) => {
  const {messages} = useIntl();
  return (
    <AppCard heightFull title={messages['dashboard.goalProgress']}>
      <GoalProgressGraph progressGraphData={progressGraphData} />
      <div className='goal-progress-content'>
        <div className='ant-row ant-row-middle'>
          <span className='dot' style={{backgroundColor: '#0A8FDC'}} />
          <p className='mb-0'>
            <IntlMessages id='dashboard.inProgress' />
          </p>
        </div>
        <div className='ant-row ant-row-middle'>
          <span className='dot' style={{backgroundColor: 'rgb(244, 67, 54)'}} />
          <p className='mb-0'>
            <IntlMessages id='common.actual' />
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default GoalProgress;

GoalProgress.defaultProps = {
  progressGraphData: [],
};

GoalProgress.propTypes = {
  progressGraphData: PropTypes.array,
};
