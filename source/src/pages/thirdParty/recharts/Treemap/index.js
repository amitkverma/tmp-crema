import React from 'react';
import SimpleTreemap from './Components/SimpleTreemap';
import SimpleTreemapSource from '!raw-loader!./Components/SimpleTreemap';
import CustomContentTreemap from './Components/CustomContentTreemap';
import CustomContentTreemapSource from '!raw-loader!./Components/CustomContentTreemap';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const Treemap = () => {
  return (
    <>
      <ComponentHeader
        title='Treemap'
        refUrl='http://recharts.org/en-US/api/Treemap/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Simple Tree map'
            component={SimpleTreemap}
            source={SimpleTreemapSource}
          />
        </Col>
        <Col xs={24} xl={12}>
          <ComponentCard
            title='Custom Content Treemap'
            component={CustomContentTreemap}
            source={CustomContentTreemapSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Treemap;
