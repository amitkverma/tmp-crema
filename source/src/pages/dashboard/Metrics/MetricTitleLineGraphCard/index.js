import React from 'react';
import LineGraph from './LineGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const MetricTitleLineGraphCard = ({
  title,
  titleColor,
  valueColor,
  differenceColor,
  bgColor,
  data,
  graphColor,
}) => {
  return (
    <AppCard
      className='metric-title-line-graph-card'
      style={{backgroundColor: bgColor}}>
      <h3 style={{color: titleColor}}>{title}</h3>
      <div className='metric-title-line-graph-view'>
        <h2 style={{color: valueColor}}>{data.value}</h2>

        <LineGraph data={data.graphData} graphColor={graphColor} />
      </div>
      <p
        className='metric-title-line-graph-action'
        style={{color: differenceColor}}>
        <span>{data.difference}</span>
        <span>
          <IntlMessages id='dashboard.thisMonth' />
        </span>
        <span>{data.differencePercent}</span>
      </p>
    </AppCard>
  );
};

export default MetricTitleLineGraphCard;

MetricTitleLineGraphCard.defaultProps = {
  bgColor: '',
  titleColor: '',
  valueColor: '',
  data: {
    value: '',
    difference: '',
    differencePercent: '',
    graphData: [],
  },
  differenceColor: '',
  graphColor: '',
};

MetricTitleLineGraphCard.propTypes = {
  title: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  valueColor: PropTypes.string,
  data: PropTypes.object,
  differenceColor: PropTypes.string,
  graphColor: PropTypes.string,
};
