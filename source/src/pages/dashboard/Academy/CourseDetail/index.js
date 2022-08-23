import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import CourseGraph from './CourseGraph';
import PropTypes from 'prop-types';
import AppMenu from '../../../../@crema/core/AppMenu';
import './index.style.less';

const CourseDetail = ({course}) => {
  const getTitle = () => (
    <div className='course-detail-header'>
      <img className='course-detail-thumb' alt='' src={course.thumb} />
      <div className='course-detail-header-info'>
        <h3 className='text-truncate'>{course.title}</h3>
        <p className='mb-0 text-truncate'>{course.level}</p>
      </div>
    </div>
  );

  return (
    <AppCard title={getTitle()} extra={<AppMenu />}>
      <div className='course-detail-content'>
        <div>
          <h4>{course.coveredDuration}</h4>
          <p>Lecture of</p>
          <p>{course.totalDuration}</p>
        </div>
        <div>
          <h4>{course.coveredPractice}</h4>
          <p>Practice of</p>
          <p>{course.totalPractice}</p>
        </div>

        <CourseGraph data={course.graphData} />
      </div>
    </AppCard>
  );
};

export default CourseDetail;

CourseDetail.propTypes = {
  course: PropTypes.object,
};
