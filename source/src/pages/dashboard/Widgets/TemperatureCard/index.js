import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import DayTemperature from './DayTemperature';
import AppCard from '../../../../@crema/core/AppCard';
import {SearchOutlined} from '@ant-design/icons';
import './index.style.less';

const TemperatureCard = (props) => {
  const {temperatures} = props;

  return (
    <AppCard heightFull className='no-card-space temp-card'>
      <div className='temp-header-color'>
        <div className='temp-header'>
          <h3>
            <IntlMessages id='dashboard.newYork' />
          </h3>
          <div className='temp-header-action'>
            <SearchOutlined className='pointer' />
          </div>
        </div>

        <div className='temp-header-content'>
          <h1>
            -32<sup>0</sup>
          </h1>
          <p>
            <img src={'/assets/images/weather/weather1.png'} alt='weather' />
            <IntlMessages id='dashboard.heavySnow' />
          </p>
        </div>
      </div>

      <div className='temp-content'>
        {temperatures.map((day) => {
          return <DayTemperature key={day.id} day={day} />;
        })}
      </div>
    </AppCard>
  );
};

export default TemperatureCard;

TemperatureCard.defaultProps = {
  temperatures: [],
};

TemperatureCard.propTypes = {
  temperatures: PropTypes.array,
};
