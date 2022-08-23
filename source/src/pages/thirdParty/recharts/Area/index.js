import React from 'react';
import SimpleAreaChart from './Components/SimpleAreaChart';
import SimpleAreaChartSource from '!raw-loader!./Components/SimpleAreaChart';
import StackedAreaChart from './Components/StackedAreaChart';
import StackedAreaChartSource from '!raw-loader!./Components/StackedAreaChart';
import PercentAreaChart from './Components/PercentAreaChart';
import PercentAreaChartSource from '!raw-loader!./Components/PercentAreaChart';
import AreaChartConnectNulls from './Components/AreaChartConnectNulls';
import AreaChartConnectNullsSource from '!raw-loader!./Components/AreaChartConnectNulls';
import SynchronizedAreaChart from './Components/SynchronizedAreaChart';
import SynchronizedAreaChartSource from '!raw-loader!./Components/SynchronizedAreaChart';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const AreaChart = () => {
  return (
    <>
      <ComponentHeader
        title='Area Chart'
        description='All svg elements can be added into the AreaChart component, such as defs, linearGradient, etc.'
        refUrl='http://recharts.org/en-US/api/AreaChart/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Simple modal'
            component={SimpleAreaChart}
            source={SimpleAreaChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Stacked Area Chart'
            component={StackedAreaChart}
            source={StackedAreaChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='AreaChart Connect Nulls'
            component={AreaChartConnectNulls}
            source={AreaChartConnectNullsSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Synchronized Area Chart'
            component={SynchronizedAreaChart}
            source={SynchronizedAreaChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Percent Area Chart'
            component={PercentAreaChart}
            source={PercentAreaChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};
export default AreaChart;
