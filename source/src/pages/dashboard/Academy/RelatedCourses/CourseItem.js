import React from 'react';
import PropTypes from 'prop-types';
import {EyeOutlined} from '@ant-design/icons';
import './index.style.less';

const CourseItem = ({data}) => {
  return (
    <div className='related-course-item'>
      <div className='related-course-thumb'>
        <img src={data.image} alt={data.title} />
      </div>
      <h4>{data.title}</h4>
      <div className='related-course-action'>
        <p>{data.author}</p>
        <div className='course-view'>
          <EyeOutlined />
          <span>{data.views} views</span>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

CourseItem.propTypes = {
  data: PropTypes.object,
};
