import React from 'react';
import PropTypes from 'prop-types';
import '../index.style.less';
import {FiCalendar} from 'react-icons/fi';

const TimelineItem = (props) => {
  const {data} = props;

  return (
    <div className='timeline-item'>
      <div className='timeline-item-content'>
        <div className='timeline-item-header'>
          <div>
            <h2>{data.title}</h2>
            <time className='time'>
              <FiCalendar className='time-calendar-icon' />
              {data.date}
            </time>
          </div>
          <span
            className='timeline-tag'
            style={{
              backgroundColor: data.category.color + '25',
              color: data.category.color,
            }}>
            {data.category.tag}
          </span>
        </div>
        <p className='timeline-text'>{data.text}</p>
        <div className='timeline-item-footer'>
          {data.link && (
            <a
              className='timeline-link'
              href={data.link.url}
              target='_blank'
              rel='noopener noreferrer'>
              {data.link.text}
            </a>
          )}
        </div>
        <span className='timeline-circle'>
          <span className='timeline-circle-inner' />
        </span>
      </div>
    </div>
  );
};
export default TimelineItem;

TimelineItem.propTypes = {
  data: PropTypes.object,
};
