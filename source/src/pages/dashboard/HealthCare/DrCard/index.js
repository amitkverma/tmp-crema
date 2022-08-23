import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import './index.style.less';

const DrCard = ({data}) => {
  const {bgColor, icon, time, category, name} = data;

  return (
    <AppCard
      heightFull
      style={{backgroundColor: bgColor}}
      className='dr-card card-hover'>
      <div className='dr-card-info'>
        <div className='dr-thumb'>
          <img src={icon} alt='icon' />
        </div>
        <div className='dr-card-content'>
          <div className='dr-card-content-main'>
            <h5 className='text-truncate'>{category}</h5>
            <p className='text-truncate'>{name}</p>
          </div>
          <span className='dr-time'>{time}</span>
        </div>
      </div>
    </AppCard>
  );
};

export default DrCard;

DrCard.propTypes = {
  data: PropTypes.object,
};
