import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {MdAdd} from 'react-icons/md';
import {Avatar} from 'antd';
import AppCard from '../../../../../@crema/core/AppCard';

const AddCardButton = (props) => {
  return (
    <AppCard
      className='scrum-board-add-btn-card'
      onClick={() => props.t(props.laneId)}>
      <div className='scrum-board-add-btn-card-user'>
        <Avatar className='scrum-board-add-btn-card-user-avatar'>
          <MdAdd className='scrum-board-add-btn-card-user-add-icon' />
        </Avatar>
        <div className='scrum-board-add-btn-card-user-text'>
          <IntlMessages id='scrumboard.addACard' />
        </div>
      </div>
    </AppCard>
  );
};

export default AddCardButton;

AddCardButton.propTypes = {
  t: PropTypes.func,
  laneId: PropTypes.number.isRequired,
};
