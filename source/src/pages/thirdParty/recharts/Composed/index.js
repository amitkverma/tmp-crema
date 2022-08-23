import React from 'react';
import LineBarAreaComposedChart from './Components/LineBarAreaComposedChart';
import LineBarAreaComposedChartSource from '!raw-loader!./Components/LineBarAreaComposedChart';
import VerticalComposedChart from './Components/VerticalComposedChart';
import VerticalComposedChartSource from '!raw-loader!./Components/VerticalComposedChart';
import SameDataComposedChart from './Components/SameDataComposedChart';
import SameDataComposedChartSource from '!raw-loader!./Components/SameDataComposedChart';
import ComposedChartWithAxisLabels from './Components/ComposedChartWithAxisLabels';
import ComposedChartWithAxisLabelsSource from '!raw-loader!./Components/ComposedChartWithAxisLabels';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const ComposedChart = () => {
  return (
    <>
      <ComponentHeader
        title='Composed Chart'
        description='A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended.'
        refUrl='http://recharts.org/en-US/api/ComposedChart/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Line Bar Area Composed Chart'
            component={LineBarAreaComposedChart}
            source={LineBarAreaComposedChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Line Bar Area Composed Chart'
            component={VerticalComposedChart}
            source={VerticalComposedChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Same Data Composed Chart'
            component={SameDataComposedChart}
            source={SameDataComposedChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Composed Chart With Axis Labels'
            component={ComposedChartWithAxisLabels}
            source={ComposedChartWithAxisLabelsSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ComposedChart;
