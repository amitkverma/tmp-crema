import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Button, List} from 'antd';
import './index.style.less';

const DoctorCell = ({doctor}) => {
  return (
    <List.Item className='doctor-cell item-hover'>
      <Avatar className='doctor-avatar' src={doctor.profile_pic} />
      <div className='doctor-content'>
        <h5>{doctor.name}</h5>
        <p>{doctor.speciality}</p>
      </div>
      <div className='doctor-action'>
        {doctor.scheduled ? (
          <Button className='btn-secondary-outline'>Remove</Button>
        ) : (
          <Button className='btn-primary-outline'>Schedule</Button>
        )}
      </div>
    </List.Item>
  );
};

export default DoctorCell;

DoctorCell.propTypes = {
  doctor: PropTypes.object.isRequired,
};
