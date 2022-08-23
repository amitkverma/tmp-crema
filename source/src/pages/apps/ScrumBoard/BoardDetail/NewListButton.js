import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {MdAdd} from 'react-icons/md';
import AppCard from '../../../../@crema/core/AppCard';

const NewListButton = (props) => {
  const {onClick} = props;

  return (
    <AppCard className='scrum-board-add-list-card'>
      <div className='scrum-board-add-list'>
        <span className='scrum-board-add-icon' onClick={onClick}>
          <MdAdd />
        </span>
        <p className='scrum-board-add-text'>
          <IntlMessages id='scrumboard.addAList' />
        </p>
      </div>
    </AppCard>
  );
};

export default NewListButton;

NewListButton.propTypes = {
  onClick: PropTypes.func,
};
