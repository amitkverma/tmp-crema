import React from 'react';
import {Avatar, List} from 'antd';
import PropTypes from 'prop-types';

const ProductCell = ({data}) => {
  return (
    <List.Item key={data.id} className='product-cell item-hover'>
      <Avatar variant='rounded' alt='' src={data.icon} />

      <div className='product-cellContent'>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p className='price'>
          ${data.price}
          <span style={{textDecoration: 'line-through'}}>${data.mrp}</span>
        </p>
      </div>
    </List.Item>
  );
};

export default ProductCell;

ProductCell.propTypes = {
  data: PropTypes.object,
};
