import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {Avatar} from 'antd';
import {green, red} from '@ant-design/colors';
import './index.style.less';

const CoinStats = (props) => {
  const {icon, bgColor, data, heading} = props;

  return (
    <AppCard className='coin-stats-card card-hover'>
      <div className='coin-stats-row'>
        <Avatar
          src={icon}
          className='coin-stats-avatar'
          style={{backgroundColor: bgColor}}
        />

        <div className='coin-stats-content'>
          <p>{heading}</p>

          <div className='coin-stats-content-title'>
            <h3>${data.price}</h3>
            <span style={{color: data.increment > 0.0 ? green[5] : red[5]}}>
              {data.increment}%
            </span>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default CoinStats;

CoinStats.defaultProps = {
  bgColor: '',
  data: {
    price: '',
    increment: null,
  },
};

CoinStats.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
