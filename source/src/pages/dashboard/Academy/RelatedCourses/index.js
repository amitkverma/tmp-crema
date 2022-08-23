import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseItem from './CourseItem';
import PropTypes from 'prop-types';
import './index.style.less';

const RelatedCourses = ({relatedCourses}) => {
  const {messages} = useIntl();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AppCard heightFull title={messages['academy.relatedCourses']}>
      <Slider className='related-course-slide' {...settings}>
        {relatedCourses.map((data, index) => (
          <CourseItem key={index} data={data} />
        ))}
      </Slider>
    </AppCard>
  );
};

export default RelatedCourses;

RelatedCourses.propTypes = {
  relatedCourses: PropTypes.array,
};
