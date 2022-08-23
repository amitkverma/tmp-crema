import React from 'react';
import AppCircularProgress from '../../../../@crema/core/AppCircularProgress';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';

const LearningItem = ({course}) => {
  return (
    <List.Item className='learning-items item-hover' key={course.id}>
      <div className='learning-items-info'>
        <div className='learning-thumb'>
          <img alt='' src={course.icon} />
        </div>
        <div className='learning-content'>
          <h3>{course.title}</h3>
          <p>{course.desc}</p>
        </div>
      </div>

      <div className='learning-action'>
        <AppCircularProgress
          strokeColor='#0A8FDC'
          trailColor='rgb(214, 214, 214)'
          percent={course.percentage}
          strokeWidth={8}
          width={45}
        />
      </div>
    </List.Item>
  );
};

export default LearningItem;

LearningItem.propTypes = {
  course: PropTypes.object,
};
