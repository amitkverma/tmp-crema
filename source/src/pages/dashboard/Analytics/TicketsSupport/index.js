import React from 'react';

import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import './index.style.less';

import {Collapse, Progress} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';

const {Panel} = Collapse;

function callback(key) {
  console.log(key);
}
const genExtra = ({data}) => (
  <>
    <span> {data.opened} Open</span>
  </>
);

const TicketsSupport = ({tickets}) => {
  return (
    <AppCard
      className='no-card-space ana-ticket-support-card'
      actions={[
        <div key={1} className='ana-ticket-support-action'>
          <ClockCircleOutlined style={{fontSize: 16}} />
          <span>Last update 30 min ago</span>
        </div>,
      ]}>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        accordion
        onChange={callback}>
        {tickets.map((data) => (
          <Panel header={data.name} key={data.id} extra={genExtra({data})}>
            <div className='ticket-support-collapse'>
              <div className='ticket-support-collapse-item'>
                <span className='ticket-support-open'>Open</span>
                <div className='ant-row ant-row-middle'>
                  <Progress
                    percent={data.overAllPercentage.open}
                    status='active'
                    strokeColor='#5ABE20'
                    trailColor='rgb(214, 214, 214)'
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className='ticket-support-collapse-item'>
                <span className='ticket-support-open'>Closed</span>
                <div className='ant-row ant-row-middle'>
                  <Progress
                    percent={data.overAllPercentage.close}
                    status='active'
                    strokeColor='#F44D54'
                    trailColor='rgb(214, 214, 214)'
                    strokeWidth={5}
                  />
                </div>
              </div>
              <div className='ticket-support-collapse-item'>
                <span className='ticket-support-open'>On Hold</span>
                <div className='ant-row ant-row-middle'>
                  <Progress
                    percent={data.overAllPercentage.hold}
                    status='active'
                    strokeColor='#F59821'
                    trailColor='rgb(214, 214, 214)'
                    strokeWidth={5}
                  />
                </div>
              </div>
            </div>
          </Panel>
        ))}
      </Collapse>
    </AppCard>
  );
};

export default TicketsSupport;

TicketsSupport.propTypes = {
  tickets: PropTypes.array,
};
