import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

const SuggestionItem = ({item}) => {
  return (
    <div className='suggestion-item item-hover'>
      <Avatar className='suggestion-avatar' src={item.thumb} alt={item.name} />
      <div className='suggestion-item-content'>
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default SuggestionItem;

SuggestionItem.propTypes = {
  item: PropTypes.object,
};
