import React from 'react';
import {Line, LineChart} from 'recharts';
import PropTypes from 'prop-types';

const LineGraph = (props) => {
  const {data, graphColor} = props;

  return (
    <div className='metric-title-line-graph'>
      <LineChart
        className='metric-title-line-graph-root'
        width={300}
        height={40}
        data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={4}
          dot={false}
        />
      </LineChart>

      <LineChart width={300} height={40} data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={4}
          dot={false}
          strokeDasharray='5 5'
        />
      </LineChart>
    </div>
  );
};

export default LineGraph;

LineGraph.defaultProps = {
  data: [],
  graphColor: '',
};

LineGraph.propTypes = {
  data: PropTypes.array,
  graphColor: PropTypes.string,
};
