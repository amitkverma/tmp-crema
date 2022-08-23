import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.style.less';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CourseCategories = ({course}) => {
  const {images, title, desc, lessons, xp} = course;

  return (
    <AppCard heightFull className='no-card-space course-categories-card'>
      <Slider className='course-categories-slider' {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={image.title} />
          </div>
        ))}
      </Slider>
      <div className='course-categories-content'>
        <h5 className='course-categories-title'>{title}</h5>
        <p>{desc}</p>
        <div className='course-categories-footer'>
          <span
            className='course-categories-badge'
            style={{backgroundColor: '#E7F4FC', color: '#259BE0'}}>
            <img
              src={'/assets/images/dashboard/academy/lessons.png'}
              alt='lessons'
            />
            {lessons} Lessons
          </span>
          <span
            className='course-categories-badge'
            style={{backgroundColor: '#FFF5EB', color: '#FCB267'}}>
            <img src={'/assets/images/dashboard/academy/xp.png'} alt='xp' />{' '}
            {xp} XP
          </span>
        </div>
      </div>
    </AppCard>
  );
};

export default CourseCategories;

CourseCategories.defaultProps = {};

CourseCategories.propTypes = {
  course: PropTypes.object,
};
