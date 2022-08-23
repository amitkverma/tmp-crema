import React from 'react';
import PropTypes from 'prop-types';
import {List, Avatar} from 'antd';
import './index.style.less';

const AppointmentCell = ({appointment}) => {
  return (
    <List.Item className='appointment-cell item-hover'>
      <Avatar
        className='appointment-cell-avatar'
        src={appointment.profile_pic}
      />
      <div className='appointment-cell-content'>
        <h5>{appointment.name}</h5>
        <p>{appointment.speciality}</p>
      </div>
      <div className='appointment-cell-action'>
        <p className='appointment-cell-time'>{appointment.appointmentTime}</p>
        <p>{appointment.appointmentDate}</p>
      </div>
    </List.Item>
  );
};

export default AppointmentCell;

AppointmentCell.propTypes = {
  appointment: PropTypes.object.isRequired,
};
