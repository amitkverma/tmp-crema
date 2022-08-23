import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import './index.style.less';

import {BiBasket} from 'react-icons/bi';
import {FcGraduationCap} from 'react-icons/fc';
import {GiBookshelf} from 'react-icons/gi';
import {FcReading} from 'react-icons/fc';

const getIcon = (iconType) => {
  switch (iconType) {
    case 'BiBasket':
      return <BiBasket color='#9E49E6' className='icon' />;
    case 'FcGraduationCap':
      return <FcGraduationCap color='#0A8FDC' className='icon' />;
    case 'GiBookshelf':
      return <GiBookshelf color='#49BD65' className='icon' />;
    default:
      return <FcReading color='#9E49E6' className='icon' />;
  }
};
const GeneralStats = ({stats}) => {
  console.log('icon', stats.icon);
  return (
    <AppCard heightFull className='card-hover'>
      <div className='general-stats'>
        <Avatar
          className='general-stats-avatar'
          style={{backgroundColor: stats.bgcolor}}>
          {getIcon(stats.icon)}
        </Avatar>
        <div className='general-stats-content'>
          <div>
            <h3>{stats.count}</h3>
            <p className='text-truncate'>{stats.title}</p>
          </div>
          <span
            style={{backgroundColor: stats.bgcolor, color: stats.badgeColor}}
            className='general-stats-badge'>
            {stats.new}
          </span>
        </div>
      </div>
    </AppCard>
  );
};

export default GeneralStats;

GeneralStats.defaultProps = {};

GeneralStats.propTypes = {
  stats: PropTypes.object,
};
