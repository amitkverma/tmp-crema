import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';

import AppSelect from '../../../../@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Avatar, Col} from 'antd';
import './index.style.less';
import MixBarChart from './MixBarChart';
import AppList from '../../../../@crema/core/AppList';

const SalesState = ({salesState, saleChartData}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const {messages} = useIntl();
  return (
    <AppCard
      className='sales-state-card'
      title={messages['dashboard.analytics.salesState']}
      heightFull
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <p className='sales-state-sub-title'>
        1343 {messages['dashboard.analytics.salesThisWeek']}
      </p>

      <div className='sales-state-main'>
        <AppRowContainer>
          <Col xs={24} sm={14} className='mb-0'>
            <div className='react-pie-chart'>
              <MixBarChart data={saleChartData} />
            </div>
          </Col>

          <Col xs={24} sm={10} className='mb-0'>
            <div className='sales-state-content'>
              <AppList
                data={salesState}
                renderItem={(item) => (
                  <div
                    className='sales-state-item'
                    key={'salesState-' + item.id}>
                    <Avatar src={item.icon} alt='icon' />

                    <div className='sales-state-item-content'>
                      <h3>${item.amount}</h3>
                      <p className='mb-0'>{item.type}</p>
                    </div>
                  </div>
                )}
              />
            </div>
          </Col>
        </AppRowContainer>
      </div>
    </AppCard>
  );
};
export default SalesState;

SalesState.defaultProps = {
  salesState: [],
  saleChartData: [],
};

SalesState.propTypes = {
  salesState: PropTypes.array,
  saleChartData: PropTypes.array,
};
