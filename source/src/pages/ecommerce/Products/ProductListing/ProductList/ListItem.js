import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {setCurrentProduct} from '../../../../../redux/actions/Ecommerce';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {HeartFilled, HeartOutlined} from '@ant-design/icons';
import {Checkbox, Rate} from 'antd';
import AppCard from '../../../../../@crema/core/AppCard';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ListItem = (props) => {
  const {item} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <AppCard
      className='product-list-card item-hover'
      onClick={() => {
        dispatch(setCurrentProduct(item));
        navigate('/apps/ecommerce/product_detail/' + item.id);
      }}>
      <div className='product-list-card-content'>
        <div className='product-list-slider'>
          <Slider className='slick-slider-global' {...settings}>
            {item.image.map((img) => {
              return (
                <div className='product-list-slider-thumb' key={img.id}>
                  <img src={img.src} alt='watch' />
                </div>
              );
            })}
          </Slider>
        </div>

        <div className='product-list-slider-content'>
          <div className='product-list-slider-content-header'>
            <h3 className='text-truncate'>{item.title}</h3>

            <span className='product-list-favor-checked' onClick={OnFavorite}>
              {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            </span>
          </div>

          <p className='product-list-card-content-para'>{item.description}</p>

          <div className='product-list-price'>
            <div className='product-list-price-item'>
              <span className='product-list-price-item-text'>
                <IntlMessages id='ecommerce.exclusivePrice' />:
              </span>
              <span className='product-list-price-item-value'>
                ${+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
              </span>
            </div>
            <div className='product-list-price-item'>
              <IntlMessages id='ecommerce.mrp' />:
              <span className='product-list-price-item-value-cut'>
                ${item.mrp}
              </span>
            </div>
            <div className='product-list-price-item green'>
              {item.discount}% <IntlMessages id='ecommerce.off' />
            </div>
          </div>

          <div className='product-list-action'>
            <div className='product-list-action-item add-to-com'>
              <Checkbox />
              <span>
                <IntlMessages id='ecommerce.addToCompare' />
              </span>
            </div>
            <div className='product-list-action-item'>
              <Rate value={item.rating} />
              <span>{`(${item.reviews})`}</span>
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
