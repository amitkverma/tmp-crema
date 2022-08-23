import React, {useState} from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import CourseCell from './CourseCell';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';
import clsx from 'clsx';

const MyCourses = ({courses}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    courses.categories[0].slug,
  );

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const {messages} = useIntl();

  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      heightFull
      title={messages['academy.myCourses']}>
      <div className='my-course-header'>
        {courses.categories.map((item, index) => (
          <div
            className='my-categories-item'
            key={index}
            onClick={() => handleChangeCategory(item.slug)}>
            <span
              className={clsx('my-categories-badge', {
                active: item.slug === selectedCategory,
              })}
              key={index}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <List
        dataSource={courses.courses}
        renderItem={(data, index) => <CourseCell key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyCourses;

MyCourses.propTypes = {
  courses: PropTypes.object,
};
