import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import VisitsGraph from './VisitsGraph';
import AppMenu from '../../../../@crema/core/AppMenu';
import PropTypes from 'prop-types';
import './index.style.less';

const CancelVisits = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='cancel-visits-card'
      title={messages['healthCare.cancelledVisits']}
      extra={<AppMenu />}>
      <div className='cancel-visits-content'>
        <span className='cancel-visits-number'>32</span>
        <span className='cancel-arrow-icon'>
          <img src={'/assets/images/dashboard/decries_icon.png'} alt='down' />
        </span>
      </div>
      <div className='cancel-visits-graph'>
        <VisitsGraph data={data} />
      </div>
    </AppCard>
  );
};

export default CancelVisits;

CancelVisits.defaultProps = {
  data: [],
};

CancelVisits.propTypes = {
  data: PropTypes.array,
};
