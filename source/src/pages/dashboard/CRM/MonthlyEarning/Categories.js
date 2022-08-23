import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const Categories = (props) => {
  const {category} = props;

  return (
    <List.Item>
      <span
        className='earning-dot'
        style={{backgroundColor: props.category.colorName}}
      />
      <p className='earning-text'>{category.name}</p>
      <span className='earning-action'>${category.value}</span>
    </List.Item>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};
