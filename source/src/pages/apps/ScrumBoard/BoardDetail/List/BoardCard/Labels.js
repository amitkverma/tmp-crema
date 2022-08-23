import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'antd';

const Labels = ({labels}) => {
  return (
    <div className='scrum-board-label-flex'>
      {labels.map((label) => {
        return (
          <Tooltip title={label.name} placement='top' key={label.id}>
            <span
              className='scrum-board-label'
              key={label.id}
              style={{backgroundColor: label.color}}
            />
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
