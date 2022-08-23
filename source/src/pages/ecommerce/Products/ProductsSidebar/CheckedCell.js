import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';

const CheckedCell = ({selected, data, onChange}) => {
  return (
    <div
      onClick={() => onChange(data.id)}
      className='product-sidebar-checked-cell'>
      <Checkbox
        checked={selected.some((item) => item === data.id)}
        color='primary'
      />
      <p className='mb-0'>{data.name}</p>
    </div>
  );
};

export default CheckedCell;

CheckedCell.propTypes = {
  selected: PropTypes.array,
  data: PropTypes.object,
  onChange: PropTypes.func,
};
