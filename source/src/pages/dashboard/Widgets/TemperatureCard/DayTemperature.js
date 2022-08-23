import React from 'react';
import PropTypes from 'prop-types';
import './index.style.less';

const DayTemperature = (props) => {
  const {day} = props;

  return (
    <div className='day-temp-item'>
      <p>{day.day}</p>
      <span>
        <img src={day.image} alt='weather' />
      </span>
    </div>
  );
};

export default DayTemperature;

DayTemperature.propTypes = {
  day: PropTypes.object.isRequired,
};
