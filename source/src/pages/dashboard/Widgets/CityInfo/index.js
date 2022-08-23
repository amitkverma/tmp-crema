import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CityInfo = (props) => {
  const {cityData} = props;

  return (
    <AppCard heightFull className='no-card-space'>
      <Slider className='city-info-slide-card' {...settings}>
        {cityData.map((city) => {
          return (
            <div key={city.id} className='city-info-slide'>
              <img
                className='city-info-slide-img'
                src={city.image}
                alt='building'
              />
              <div className='city-info-slide-img-content'>
                <h3>{city.name}</h3>

                <div className='city-info-slide-img-content-action'>
                  <p>{city.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </AppCard>
  );
};

export default CityInfo;

CityInfo.defaultProps = {
  cityData: [],
};

CityInfo.propTypes = {
  cityData: PropTypes.array,
};
