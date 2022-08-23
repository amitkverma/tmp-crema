import React, {useState} from 'react';
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Button} from 'antd';
import {addItemToCart} from '../../../../redux/actions';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {HeartFilled, HeartOutlined} from '@ant-design/icons';
import './index.style.less';
import {showMessage} from '../../../../redux/actions';

const ProductImageSlide = ({product}) => {
  const [value, setValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const slides = product.image.map((data, index) => (
    <img key={index} src={data.src} alt='' />
  ));
  const onChange = (value) => {
    setValue(value);
  };

  const onAddToCard = () => {
    dispatch(showMessage(product.title + ' added to cart successfully'));
    dispatch(addItemToCart(product));
  };
  const onButNowToCard = () => {
    dispatch(addItemToCart(product));
    navigate('/ecommerce/cart');
  };

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='product-image-slide'>
      <div className='product-image-slide-root'>
        <Dots
          position='left'
          thumbnails={slides}
          value={value}
          onChange={onChange}
          number={slides.length}
        />
        <Carousel
          position='left'
          value={value}
          slides={slides}
          onChange={onChange}
        />

        <span className='product-favorite' onClick={OnFavorite}>
          {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </span>
      </div>
      <div className='product-image-slide-action'>
        <Button
          type='primary'
          onClick={onAddToCard}
          style={{marginRight: 20, width: 140}}>
          Add to cart
        </Button>
        <Button
          style={{width: 140}}
          className='btn-secondary'
          onClick={onButNowToCard}>
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default ProductImageSlide;

ProductImageSlide.propTypes = {
  product: PropTypes.object,
};
