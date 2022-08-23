import React from 'react';
import data from './data';
import TimelineItem from './Component/TimelineItem';
import './index.style.less';

const Timeline = () => {
  return (
    data.length > 0 && (
      <div className='timeline-custom'>
        <div className='timeline-container'>
          {data.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </div>
    )
  );
};

export default Timeline;
