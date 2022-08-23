import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {CheckOutlined} from '@ant-design/icons';

const ColorCell = ({selected, data, onChange}) => {
  return (
    <div
      onClick={() => onChange(data)}
      className='product-sidebar-color-cell'
      style={{
        backgroundColor: data,
      }}>
      {selected.some((item) => item === data) ? (
        <Button className='product-sidebar-color-cell-btn'>
          <CheckOutlined />
        </Button>
      ) : null}
    </div>
  );
};

export default ColorCell;

ColorCell.propTypes = {
  selected: PropTypes.array,
  data: PropTypes.any,
  onChange: PropTypes.func,
};
