import React from 'react';
import PropTypes from 'prop-types';
import {StarFilled} from '@ant-design/icons';
import {Checkbox} from 'antd';

const RatingCell = ({selected, data, onChange}) => {
  return (
    <div onClick={() => onChange(data)} className='product-sidebar-rating-cell'>
      <Checkbox
        checked={selected.some((item) => item === data)}
        color='primary'
      />
      {data}
      <StarFilled style={{fontSize: 14, marginLeft: 5}} />
    </div>
  );
};

export default RatingCell;

RatingCell.propTypes = {
  selected: PropTypes.any,
  data: PropTypes.any,
  onChange: PropTypes.func,
};
