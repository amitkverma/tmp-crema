import React from 'react';
import StaticsGraph from './StaticsGraph';
import AppCard from '../../../../@crema/core/AppCard';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import './index.style.less';
import PropTypes from 'prop-types';

const ReportCard = ({data}) => {
  return (
    <AppCard className='report-card card-hover' heightFull>
      <div className='report-flex'>
        <div className='report-content'>
          <h3>{data.value}</h3>
          <p>{data.type}</p>
        </div>
        <div className='reChartContainer'>
          <StaticsGraph
            id={data.id}
            graphData={data.graphData}
            growth={data.growth}
            strokeColor={data.strokeColor}
          />
          <div className='reChartAction' style={{color: data.strokeColor}}>
            {data.growth > 0 ? (
              <ArrowUpOutlined style={{color: data.strokeColor}} />
            ) : (
              <ArrowDownOutlined style={{color: data.strokeColor}} />
            )}
            {data.growth}
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default ReportCard;

ReportCard.propTypes = {
  data: PropTypes.object,
};
