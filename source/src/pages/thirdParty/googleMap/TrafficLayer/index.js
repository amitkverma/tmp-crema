import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import TrafficLayer from './Components/TrafficLayerEx';
import TrafficLayerSource from '!raw-loader!./Components/TrafficLayerEx';

const TrafficLayerEx = () => {
  return (
    <>
      <ComponentHeader
        title='Traffic Google Map'
        description='A wrapper around google.maps.TrafficLayer'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Traffic Map'
            component={TrafficLayer}
            source={TrafficLayerSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default TrafficLayerEx;
