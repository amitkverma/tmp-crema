import React from 'react';
import {MdAdd} from 'react-icons/md';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';

const AddBoardButton = ({onAddButtonClick}) => {
  return (
    <AppCard
      className='scrum-board-add-card'
      onClick={() => onAddButtonClick()}>
      <span className='scrum-board-add-card-icon'>
        <MdAdd />
      </span>
      <p className='scrum-board-add-card-text'>
        <IntlMessages id='scrumboard.addNewBoard' />
      </p>
    </AppCard>
  );
};

export default AddBoardButton;

AddBoardButton.propTypes = {
  onAddButtonClick: PropTypes.func,
};
