import React from 'react';
import {Button, List} from 'antd';
import PropTypes from 'prop-types';
import AppMenu from '../../../../@crema/core/AppMenu';
import './index.style.less';

const CourseCell = ({course}) => {
  return (
    <List.Item key={course.id} className='course-cell item-hover'>
      <div className='course-cell-content'>
        <div className='course-cell-thumb'>
          <img alt='' src={course.thumb} />
        </div>
        <div className='course-cell-info'>
          <h3 className='text-truncate'>{course.title}</h3>
          <p className='text-truncate'>{course.duration}</p>
        </div>
      </div>

      <div className='course-cell-action'>
        {course.isCompleted ? (
          <div className='ant-row ant-row-middle'>
            <span className='course-cell-rate'>Rate</span>
            <Button className='course-cell-btn' type='primary'>
              Certificate
            </Button>
          </div>
        ) : (
          <div className='ant-row ant-row-middle'>
            <img
              src={'/assets/images/dashboard/academy/rating.png'}
              alt='rating'
            />
            <span className='course-cell-rating'>{course.rating}</span>
            <Button className='btn-primary-outline course-cell-btn'>
              View Course
            </Button>
          </div>
        )}
        <div className='course-cell-menu'>
          <AppMenu />
        </div>
      </div>
    </List.Item>
  );
};

export default CourseCell;

CourseCell.propTypes = {
  course: PropTypes.object,
};
