import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import './index.style.less';

const InfoWidget = ({data}) => {
  return (
    <AppCard className='ana-info-widget-card' heightFull>
      <div className='ana-info-widget-info'>
        <div className='ana-info-widget-img'>
          <img src={data.icon} alt='icon' />
        </div>
        <div className='ana-info-widget-content'>
          <h3>{data.count}</h3>
          <p className='text-truncate'>{data.details}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default InfoWidget;

InfoWidget.propTypes = {
  data: PropTypes.object,
};
