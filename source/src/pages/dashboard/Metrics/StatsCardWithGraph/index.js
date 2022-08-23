import React from 'react';
import IncomeGraph from './IncomeGraph';
import WebTrafficGraph from './WebTrafficGraph';
import RevenueGrowthGraph from './RevenueGrowthGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const StatsCardWithGraph = ({
  data,
  text,
  bgColor,
  headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'incomeGraph':
        return <IncomeGraph data={data.graphData} />;

      case 'trafficGraph':
        return <WebTrafficGraph data={data.graphData} />;

      case 'revenueGrowth':
        return <RevenueGrowthGraph data={data.graphData} />;

      default:
        return <IncomeGraph data={data.graphData} />;
    }
  };

  return (
    <AppCard
      className='stats-card-with-graph-card'
      style={{backgroundColor: bgColor}}
      heightFull>
      <div className='stats-card-with-graph'>
        <div className='stats-card-with-graph-content'>
          <p style={{color: headingColor}}>{text}</p>
          <h3 style={{color: valueColor}}>{data.value}</h3>
        </div>
        <div className='stats-card-graph'>{onGetGraph()}</div>
      </div>
    </AppCard>
  );
};

export default StatsCardWithGraph;

StatsCardWithGraph.defaultProps = {
  bgColor: '',
  data: {
    value: '',
    graphData: [],
  },
  type: '',
  headingColor: '',
  valueColor: '',
};

StatsCardWithGraph.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  headingColor: PropTypes.string,
  valueColor: PropTypes.string,
};
