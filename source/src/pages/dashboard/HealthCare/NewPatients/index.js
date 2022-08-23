import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PatientGraph from './PatientGraph';
import AppMenu from '../../../../@crema/core/AppMenu';
import PropTypes from 'prop-types';
import './index.style.less';

const NewPatients = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='patients-card'
      title={messages['healthCare.newPatient']}
      extra={<AppMenu />}>
      <div className='patients-content'>
        <span className='patients-number'>214</span>
        <span className='patients-arrow-icon'>
          <img
            src={'/assets/images/dashboard/metrics_icon_active.png'}
            alt='down'
          />
        </span>
      </div>
      <div className='patients-graph'>
        <PatientGraph data={data} />
      </div>
    </AppCard>
  );
};

export default NewPatients;

NewPatients.defaultProps = {
  data: [],
};

NewPatients.propTypes = {
  data: PropTypes.array,
};
