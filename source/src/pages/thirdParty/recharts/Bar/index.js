import React from 'react';
import TinyBarChart from './Components/TinyBarChart';
import TinyBarChartSource from '!raw-loader!./Components/TinyBarChart';
import StackedBarChart from './Components/StackedBarChart';
import StackedBarChartSource from '!raw-loader!./Components/StackedBarChart';
import MixBarChart from './Components/MixBarChart';
import MixBarChartSource from '!raw-loader!./Components/MixBarChart';
import CustomShapeBarChart from './Components/CustomShapeBarChart';
import CustomShapeBarChartSource from '!raw-loader!./Components/CustomShapeBarChart';
import PositiveAndNegativeBarChart from './Components/PositiveAndNegativeBarChart';
import PositiveAndNegativeBarChartSource from '!raw-loader!./Components/PositiveAndNegativeBarChart';
import BarChartStackedBySign from './Components/BarChartStackedBySign';
import BarChartStackedBySignSource from '!raw-loader!./Components/BarChartStackedBySign';
import BiaxialBarChart from './Components/BiaxialBarChart';
import BiaxialBarChartSource from '!raw-loader!./Components/BiaxialBarChart';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const BarChart = () => {
  return (
    <>
      <ComponentHeader
        title='Bar Chart'
        description='All svg elements can be added into the BarChart component, such as defs, linearGradient, etc.'
        refUrl='http://recharts.org/en-US/api/BarChart/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Tiny Bar Chart'
            component={TinyBarChart}
            source={TinyBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Stacked Bar Chart'
            component={StackedBarChart}
            source={StackedBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Mix Bar Chart'
            component={MixBarChart}
            source={MixBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Custom Shape Bar Chart'
            component={CustomShapeBarChart}
            source={CustomShapeBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Positive And Negative Bar Chart'
            component={PositiveAndNegativeBarChart}
            source={PositiveAndNegativeBarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Bar Chart Stacked By Sign'
            component={BarChartStackedBySign}
            source={BarChartStackedBySignSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Biaxial Bar Chart'
            component={BiaxialBarChart}
            source={BiaxialBarChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default BarChart;
