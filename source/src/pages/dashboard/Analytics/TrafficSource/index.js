import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';

import {Progress, Collapse} from 'antd';

const {Panel} = Collapse;

const TrafficSource = ({trafficData}) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['dashboard.analytics.trafficSource']}>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        accordion
        className='traffic-collapse'>
        {trafficData.map((data) => (
          <Panel
            header={
              <div className='traffic-collapse-header-panel'>
                <div className='traffic-collapse-header'>
                  <h3>{data.title}</h3>
                  <span>{data.value}%</span>
                </div>
                <Progress
                  percent={data.value}
                  strokeWidth={10}
                  strokeColor='#0698EC'
                  trailColor='#d6d6d6'
                  showInfo={false}
                />
              </div>
            }
            key={data.id}
            className='traffic-collapse-panel'>
            <div className='traffic-collapse-content'>
              <span className='traffic-collapse-data'>{data.session}</span>
              <span>Session</span>
            </div>
          </Panel>
        ))}
      </Collapse>
    </AppCard>
  );
};

export default TrafficSource;

TrafficSource.propTypes = {
  trafficData: PropTypes.array,
};
