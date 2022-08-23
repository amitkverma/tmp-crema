import React from 'react';
import SimpleScatterChart from './Components/SimpleScatterChart';
import SimpleScatterChartSource from '!raw-loader!./Components/SimpleScatterChart';
import ThreeDimScatterChart from './Components/ThreeDimScatterChart';
import ThreeDimScatterChartSource from '!raw-loader!./Components/ThreeDimScatterChart';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const Scatter = () => {
  return (
    <>
      <ComponentHeader
        title='ScatterChart'
        refUrl='http://recharts.org/en-US/api/ScatterChart'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Simple Scatter Chart'
            component={SimpleScatterChart}
            source={SimpleScatterChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Three Dim Scatter Chart'
            component={ThreeDimScatterChart}
            source={ThreeDimScatterChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Scatter;
