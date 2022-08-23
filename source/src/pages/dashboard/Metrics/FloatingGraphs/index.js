import React from 'react';
import GraphFile from './GraphFile';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import './index.style.less';

const FloatingGraphs = ({data, title}) => {
  return (
    <AppCard className='floating-graph-card' heightFull>
      <p>{title}</p>
      <h3 className='floating-graph-card-title'>
        <span className='floating-graph-card-title-value'>{data.value}</span>
        {data.change > 0 ? (
          <span className='floating-graph-card-title-growth'>
            <span className='floating-graph-card-title-growth-arrow'>
              <ArrowUpOutlined />
            </span>
            <span className='floating-graph-card-title-growth-value'>
              {data.change}
            </span>
          </span>
        ) : (
          <span className='floating-graph-card-title-growth down'>
            <span className='floating-graph-card-title-growth-arrow'>
              <ArrowDownOutlined />
            </span>
            <span className='floating-graph-card-title-growth-value'>
              {data.change}
            </span>
          </span>
        )}
      </h3>
      <div className='floating-graph'>
        <GraphFile
          data={data.graphData}
          strokeColor={data.strokeColor}
          areaColor={data.areaColor}
        />
      </div>
    </AppCard>
  );
};

export default FloatingGraphs;

FloatingGraphs.defaultProps = {
  text: '',
  data: {
    value: '',
    change: 0,
    strokeColor: '#4299E1',
    areaColor: '#90CDF4',
    graphData: [],
  },
};

FloatingGraphs.propTypes = {
  text: PropTypes.string,
  data: PropTypes.object,
  title: PropTypes.any,
};
