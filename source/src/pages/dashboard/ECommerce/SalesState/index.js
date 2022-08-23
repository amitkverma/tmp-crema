import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {Typography} from 'antd';
import './index.style.less';
import PropTypes from 'prop-types';

const {Title} = Typography;

const SalesState = ({data}) => {
  const {icon, value, type, bgColor} = data;
  return (
    <AppCard
      className='state-card card-hover'
      style={{backgroundColor: bgColor}}>
      <div className='state-row'>
        <div className='state-thumb'>
          <img src={icon} alt={icon.name} />
        </div>
        <div className='state-content'>
          <Title className='text-truncate' level={3}>
            {value}
          </Title>
          <p className='text-truncate'>{type}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default SalesState;

SalesState.propTypes = {
  data: PropTypes.object,
};
