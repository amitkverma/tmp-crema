import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const LabelItem = ({label}) => {
  return (
    <div key={label.id} className='mail-label-item'>
      <NavLink to={`/apps/mail/label/${label.alias}`}>
        <span className='mail-dots' style={{backgroundColor: label.color}} />
        {label.name}
      </NavLink>
    </div>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};
