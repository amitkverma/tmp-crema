import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'antd';
import {MdLabelOutline} from 'react-icons/md';

const Labels = ({labels}) => {
  return (
    <div className='todo-list-item-label-group'>
      {labels.map((label) => {
        return (
          <Tooltip title={label.name} placement='top' key={label.id}>
            <span
              className='todo-list-item-label-group-item'
              style={{color: label.color}}>
              <MdLabelOutline />
            </span>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Labels;

Labels.propTypes = {
  labels: PropTypes.array.isRequired,
};
