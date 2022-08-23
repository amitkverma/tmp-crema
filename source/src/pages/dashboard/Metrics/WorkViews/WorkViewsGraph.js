import React from 'react';
import {Line, LineChart, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

const WorkViewsGraph = ({data}) => {
  return (
    <div className='work-view-graph-view'>
      <ResponsiveContainer height={100} width='100%'>
        <LineChart data={data}>
          <Line
            type='monotone'
            dataKey='value'
            stroke='#E2E8F0'
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkViewsGraph;

WorkViewsGraph.defaultProps = {
  data: [],
};

WorkViewsGraph.propTypes = {
  data: PropTypes.array,
};
