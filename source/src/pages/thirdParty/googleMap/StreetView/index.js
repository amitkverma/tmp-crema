import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import StreetViewMap from './Components/StreetViewPanoramaEx';
import StreetViewMapSource from '!raw-loader!./Components/StreetViewPanoramaEx';

const StreetView = () => {
  return (
    <>
      <ComponentHeader
        title='StreetView Map'
        description='A wrapper around google.maps.StreetViewPanorama'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama/'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='StreetView Map'
            component={StreetViewMap}
            source={StreetViewMapSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default StreetView;
