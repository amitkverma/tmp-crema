import React from 'react';
import SimpleRadarChart from './Components/SimpleRadarChart';
import SimpleRadarChartSource from '!raw-loader!./Components/SimpleRadarChart';
import SpecifiedDomainRadarChart from './Components/SpecifiedDomainRadarChart';
import SpecifiedDomainRadarChartSource from '!raw-loader!./Components/SpecifiedDomainRadarChart';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const Radar = () => {
  return (
    <>
      <ComponentHeader
        title='Radar Chart'
        refUrl='http://recharts.org/en-US/api/RadarChart'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Simple Radar Chart'
            component={SimpleRadarChart}
            source={SimpleRadarChartSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Specified Domain Radar Chart'
            component={SpecifiedDomainRadarChart}
            source={SpecifiedDomainRadarChartSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Radar;
