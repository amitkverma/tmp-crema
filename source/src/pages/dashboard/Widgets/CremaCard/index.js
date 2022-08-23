import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const CremaCard = (props) => {
  const {data, bgColor, icon} = props;

  return (
    <AppCard heightFull style={{backgroundColor: bgColor}}>
      <div className='crema-card-header'>
        <div className='crema-user-info'>
          <div className='crema-logo'>
            <img alt='logo' src={data.image} />
          </div>
          <div className='crema-user-info-content'>
            <h4 className='text-truncate text-uppercase crema-title'>
              {data.name}
            </h4>
            <p className='text-truncate'>{data.id}</p>
          </div>
        </div>
        <span className='crema-social-link'>{icon}</span>
      </div>

      <p className='crema-para'>{data.desc}</p>
    </AppCard>
  );
};

export default CremaCard;

CremaCard.defaultProps = {
  bgColor: '',
};

CremaCard.propTypes = {
  data: PropTypes.object.isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.any,
};
