import React from 'react';
import SimpleRadialBarChart from './Components/SimpleRadialBarChart';
import SimpleRadialBarChartSource from '!raw-loader!./Components/SimpleRadialBarChart';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const Radial = () => {
  return (
    <>
      <ComponentHeader
        title='Radial Bar Chart'
        refUrl='http://recharts.org/en-US/api/RadialBarChart/'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Simple Radial Bar Chart'
            component={SimpleRadialBarChart}
            source={SimpleRadialBarChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Radial;
