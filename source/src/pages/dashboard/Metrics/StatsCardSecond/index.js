import React from 'react';
import {Avatar} from 'antd';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const StatsCardSecond = ({icon, bgColor, text, value}) => {
  return (
    <AppCard className='stats-card-second' heightFull>
      <Avatar
        className='stats-card-second-avatar'
        src={<img src={icon} alt='' />}
        style={{backgroundColor: bgColor}}
      />
      <h3>{value}</h3>
      <p>{text}</p>
    </AppCard>
  );
};

export default StatsCardSecond;

StatsCardSecond.defaultProps = {
  bgColor: '',
  value: '',
};

StatsCardSecond.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.any.isRequired,
  value: PropTypes.string,
  icon: PropTypes.string,
};
