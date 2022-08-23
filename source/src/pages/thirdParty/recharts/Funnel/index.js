import React from 'react';
import SimpleFunnel from './Components/SimpleFunnel';
import SimpleFunnelSource from '!raw-loader!./Components/SimpleFunnel';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const Treemap = () => {
  return (
    <>
      <ComponentHeader
        title='Funnel Chart'
        refUrl='http://recharts.org/en-US/api/FunnelChart/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Simple FunnelChart'
            component={SimpleFunnel}
            source={SimpleFunnelSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Treemap;
