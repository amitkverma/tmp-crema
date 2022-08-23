import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import MapOverlay from './Components/MapOverlay';
import MapOverlaySource from '!raw-loader!./Components/MapOverlay';

const MapOverlayEx = () => {
  return (
    <>
      <ComponentHeader
        title='OverlayView Map'
        description='A wrapper around google.maps.OverlayView'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Map Overlay'
            component={MapOverlay}
            source={MapOverlaySource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default MapOverlayEx;
