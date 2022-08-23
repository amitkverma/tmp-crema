import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import Graph from './Graph';
import PropTypes from 'prop-types';
import {ArrowUpOutlined} from '@ant-design/icons';
import './index.style.less';

const AppointmentCard = ({data}) => {
  return (
    <AppCard
      style={{backgroundColor: data.color, color: 'white'}}
      className='card-hover'>
      <div className='appointment-content'>
        <div className='appointment-content-item'>
          <span className='appointment-thumb'>
            <img src={data.icon} alt={data.name} />
          </span>
          <p className='text-truncate'>{data.name}</p>
          <h3>{data.value}</h3>
        </div>
        <div className='appointment-content-item appointment-content-right'>
          <div className='ant-row ant-row-middle'>
            <ArrowUpOutlined className='appointment-arrow-icon' />
            <span>{data.chartValue}</span>
          </div>
          <h5 className='text-truncate'>{data.chartTime}</h5>
          <Graph data={data.chartData} />
        </div>
      </div>
    </AppCard>
  );
};

export default AppointmentCard;

AppointmentCard.defaultProps = {
  data: {},
};

AppointmentCard.propTypes = {
  data: PropTypes.object,
};
