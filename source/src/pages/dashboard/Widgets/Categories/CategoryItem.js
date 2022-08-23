import React from 'react';
import PropTypes from 'prop-types';
import {List, Checkbox} from 'antd';
import './index.style.less';

const CategoryItem = (props) => {
  const {item, handleChange} = props;
  return (
    <List.Item key={item.id} className='category-item item-hover'>
      <Checkbox
        color='primary'
        checked={item.isChecked}
        onChange={(e) => handleChange(e, item)}
      />
      <span style={{color: `${!item.isChecked ? 'text.secondary' : ''}`}}>
        {item.name}
      </span>
    </List.Item>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
