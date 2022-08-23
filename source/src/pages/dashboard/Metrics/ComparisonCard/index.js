import React from 'react';
import ActiveUsersGraph from './ActiveUsersGraph';
import ExtraRevenueGraph from './ExtraRevenueGraph';
import TrafficRaiseGraph from './TrafficRaiseGraph';
import LessOrdersGraph from './LessOrdersGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const ComparisonCard = ({
  data,
  text,
  // bgColor,
  // headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'activeUsers':
        return <ActiveUsersGraph data={data.graphData} />;

      case 'extraRevenue':
        return <ExtraRevenueGraph data={data.graphData} />;

      case 'trafficRaise':
        return <TrafficRaiseGraph data={data.graphData} />;

      case 'lessOrders':
        return <LessOrdersGraph data={data.graphData} />;

      default:
        return <ActiveUsersGraph data={data.graphData} />;
    }
  };

  return (
    <AppCard className='no-card-space comparison-card'>
      <div className='comparison-card-info'>
        <div className='comparison-card-content'>
          <p>{text}</p>
          <h3 style={{color: valueColor}}>{data.value}</h3>
        </div>
        <div className='comparison-card-graph-view'>{onGetGraph()}</div>
      </div>
    </AppCard>
  );
};

export default ComparisonCard;

ComparisonCard.defaultProps = {
  data: {
    value: '',
    graphData: [],
  },
  type: '',
  valueColor: '',
};

ComparisonCard.propTypes = {
  text: PropTypes.any.isRequired,
  data: PropTypes.object,
  type: PropTypes.string,
  valueColor: PropTypes.string,
};
