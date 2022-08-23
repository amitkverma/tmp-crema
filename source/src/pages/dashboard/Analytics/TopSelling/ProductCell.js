import React from 'react';
import AppCircularProgress from '../../../../@crema/core/AppCircularProgress';
import {RightOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const ProductCell = ({data}) => {
  return (
    <List.Item key={data.id} className='top-selling-cell item-hover'>
      <div className='top-selling-cell-info'>
        <img className='top-selling-cell-img' alt='' src={data.icon} />

        <div className='top-selling-cell-content'>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <span className='top-selling-price'>${data.price}</span>
        </div>
      </div>

      <div className='top-selling-cell-action'>
        <AppCircularProgress
          strokeColor={data.color}
          trailColor='rgb(214, 214, 214)'
          percent={70}
          strokeWidth={10}
          format={() => <span />}
          width={50}
        />
        <div className='top-selling-cell-action-info'>
          <div>
            <p>Sales</p>
            <span>{data.rate}%</span>
          </div>
          <span className='top-selling-cell-action-icon'>
            <RightOutlined />
          </span>
        </div>
      </div>
    </List.Item>
  );
};

export default ProductCell;

ProductCell.propTypes = {
  data: PropTypes.object,
};
