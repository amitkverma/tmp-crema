import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import './index.style.less';

const InfoWidget = ({data}) => {
  return (
    <AppCard heightFull className='info-widget-card card-hover'>
      <div className='info-widget-info'>
        <div className='info-widget-thumb'>
          <img src={data.icon} alt='icon' style={{height: 60, width: 60}} />
        </div>
        <div className='info-widget-content'>
          <h3 className='text-truncate'>{data.name}</h3>
          <p style={{color: data.color}}>{data.measurement}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default InfoWidget;

InfoWidget.propTypes = {
  data: PropTypes.object,
};
