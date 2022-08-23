import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import {ClockCircleOutlined, CloudDownloadOutlined} from '@ant-design/icons';

import {Button, Tabs} from 'antd';
import './index.style.less';

const tabs = [
  {id: 1, title: 'Class Detail', slug: 'class'},
  {id: 2, title: 'Assignments', slug: 'assignments'},
  {id: 3, title: 'Projects', slug: 'projects'},
  {id: 4, title: 'Exams', slug: 'exams'},
];

const VideoPromo = ({videoPromo}) => {
  const {TabPane} = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <AppCard heightFull className='video-promo-card'>
      <div className='react-player-view'>
        <ReactPlayer
          className='react-player'
          controls={true}
          url='https://www.youtube.com/embed/X1dz0xRbSJc'
        />
      </div>
      <div className='video-promo'>
        <div className='video-promo-header'>
          <div className='video-promo-header-content'>
            <h3>{videoPromo.title}</h3>
            <p>
              <span className='border-right-before'>{videoPromo.owner}</span>
              <span className='border-right-before'>{videoPromo.category}</span>
              <span className='text-primary'>+ Follow Mentor</span>
            </p>
          </div>
          <div className='video-promo-header-action'>
            <span className='video-promo-header-icon'>
              <ClockCircleOutlined />
            </span>
            <span className='video-promo-header-icon cloud'>
              <CloudDownloadOutlined />
            </span>
          </div>
        </div>

        <Tabs
          className='video-promo-tabs'
          defaultActiveKey='1'
          onChange={callback}>
          {tabs.map((item, index) => (
            <TabPane tab={item.title} key={index}>
              {item.slug}
            </TabPane>
          ))}
        </Tabs>

        {videoPromo.assignments.map((item, index) => (
          <div className='video-tabs-content' key={index}>
            <h4>{`${index + 1}. ${item.title} `}</h4>
            <p>{item.desc}</p>
            <div className='video-tabs-action'>
              <div className='video-tabs-action-left'>
                <Button
                  size='small'
                  className='btn-primary-outline'
                  style={{fontSize: 10, whiteSpace: 'nowrap'}}>
                  See Calendar
                </Button>
                <Button
                  size='small'
                  style={{fontSize: 10, whiteSpace: 'nowrap'}}
                  type='primary'>
                  View details
                </Button>
              </div>
              <div className='video-tabs-action-right'>
                <span>{item.students} Students enrolled</span>
                <span className='text-secondary'>
                  {item.daysLeft} Days left
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppCard>
  );
};

export default VideoPromo;

VideoPromo.propTypes = {
  videoPromo: PropTypes.object,
};
