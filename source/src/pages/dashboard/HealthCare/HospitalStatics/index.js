import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import './index.style.less';

const HospitalStatics = ({data}) => {
  const {bgColor, icon, value, name} = data;

  return (
    <AppCard
      heightFull
      style={{backgroundColor: bgColor, color: 'white'}}
      className='card-hover'>
      <div className='hospital-statics'>
        <div className='hospital-statics-thumb'>
          <img src={icon} alt='icon' />
        </div>
        <div className='hospital-statics-content'>
          <h5 className='text-truncate title'>{value}</h5>
          <p className='text-truncate'>{name}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default HospitalStatics;

HospitalStatics.defaultProps = {
  data: {},
};

HospitalStatics.propTypes = {
  data: PropTypes.object,
};
