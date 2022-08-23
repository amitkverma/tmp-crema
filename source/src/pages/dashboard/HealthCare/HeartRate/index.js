import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import ViewGraph from './ViewGraph';
import PropTypes from 'prop-types';
import './index.style.less';

const HeartRate = ({data}) => {
  return (
    <AppCard
      heightFull
      style={{overflow: 'hidden', backgroundColor: data.color, color: 'white'}}>
      <div className='heart-rate'>
        <h3>{data.title}</h3>
        <div className='heart-graph-view'>
          <div className='heart-graph-item'>
            <ViewGraph data={data.graphData} />
          </div>
        </div>
        <div className='unit-title'>
          {data.measurement}
          <span>{data.unit}</span>
        </div>
      </div>
    </AppCard>
  );
};

export default HeartRate;

HeartRate.defaultProps = {
  data: {},
};

HeartRate.propTypes = {
  data: PropTypes.object,
};
