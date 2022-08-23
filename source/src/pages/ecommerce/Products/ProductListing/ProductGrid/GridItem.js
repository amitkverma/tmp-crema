import React, {useState} from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setCurrentProduct} from '../../../../../redux/actions/Ecommerce';
import {useNavigate} from 'react-router-dom';
import {HeartFilled, HeartOutlined, StarOutlined} from '@ant-design/icons';
import './index.style.less';
import AppCard from '../../../../../@crema/core/AppCard';

const GridItem = (props) => {
  const {item} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <AppCard
      className='product-grid-card item-hover'
      onClick={() => {
        dispatch(setCurrentProduct(item));
        navigate('/apps/ecommerce/product_detail/' + item.id);
      }}>
      <div className='product-grid-card-header'>
        <span className='product-grid-card-header-badge'>
          {item.rating}
          <StarOutlined />
        </span>

        <div className='product-grid-card-header-thumb'>
          <img src={item.image[0].src} alt='watch' />
        </div>

        <span className='product-list-favor-checked' onClick={OnFavorite}>
          {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </span>
      </div>

      <h3 className='text-truncate product-grid-card-title'>{item.title}</h3>

      <p className='text-truncate product-grid-card-para'>{item.description}</p>

      <div className='product-grid-action'>
        <span className='product-grid-action-item'>
          $ {+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
        </span>
        <span className='product-grid-action-item cut'>${item.mrp}</span>
        <span className='product-grid-action-item green'>
          {item.discount}% <IntlMessages id='ecommerce.off' />
        </span>
      </div>
    </AppCard>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
