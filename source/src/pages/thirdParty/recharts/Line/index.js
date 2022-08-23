import React from 'react';
import SimpleLineChart from './Components/SimpleLineChart';
import SimpleLineChartSource from '!raw-loader!./Components/SimpleLineChart';
import VerticalLineChart from './Components/VerticalLineChart';
import VerticalLineChartSource from '!raw-loader!./Components/VerticalLineChart';
import CustomizedDotLineChart from './Components/CustomizedDotLineChart';
import CustomizedDotLineChartSource from '!raw-loader!./Components/CustomizedDotLineChart';
import LineChartWithReferenceLines from './Components/LineChartWithReferenceLines';
import LineChartWithReferenceLinesSource from '!raw-loader!./Components/LineChartWithReferenceLines';
import DashedLineChart from './Components/DashedLineChart';
import DashedLineChartSource from '!raw-loader!./Components/DashedLineChart';
import LineChartWithXAxisPading from './Components/LineChartWithXAxisPading';
import LineChartWithXAxisPadingSource from '!raw-loader!./Components/LineChartWithXAxisPading';
import LineChartConnectNulls from './Components/LineChartConnectNulls';
import LineChartConnectNullsSource from '!raw-loader!./Components/LineChartConnectNulls';
import SynchronizedLineChart from './Components/SynchronizedLineChart';
import SynchronizedLineChartSource from '!raw-loader!./Components/SynchronizedLineChart';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const LineChart = () => {
  return (
    <>
      <ComponentHeader
        title='Line Chart'
        description='All svg elements can be added into the LineChart component, such as defs.'
        refUrl='http://recharts.org/en-US/api/LineChart'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Simple Line Chart'
            component={SimpleLineChart}
            source={SimpleLineChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Vertical Line Chart'
            component={VerticalLineChart}
            source={VerticalLineChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Customized Dot Line Chart'
            component={CustomizedDotLineChart}
            source={CustomizedDotLineChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Line Chart With Reference Lines'
            component={LineChartWithReferenceLines}
            source={LineChartWithReferenceLinesSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Dashed Line Chart'
            component={DashedLineChart}
            source={DashedLineChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Line Chart With X-Axis Padding'
            component={LineChartWithXAxisPading}
            source={LineChartWithXAxisPadingSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Synchronized Line Chart'
            component={SynchronizedLineChart}
            source={SynchronizedLineChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Line Chart Connect Nulls'
            component={LineChartConnectNulls}
            source={LineChartConnectNullsSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default LineChart;
