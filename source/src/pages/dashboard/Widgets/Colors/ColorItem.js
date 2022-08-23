import React from 'react';
import PropTypes from 'prop-types';
import {List, Checkbox} from 'antd';
import './index.style.less';

const ColorItem = (props) => {
  const {item, handleChange} = props;

  return (
    <List.Item key={item.id} className='color-item item-hover'>
      <Checkbox
        className='color-check-box'
        checked={item.isChecked}
        onChange={(e) => handleChange(e, item)}
      />
      <span style={{color: item.color}}>{item.name}</span>
    </List.Item>
  );
};

export default ColorItem;

ColorItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
};
