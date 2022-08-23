import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import MapDirections from './Components/MapDirections';
import MapDirectionsSource from '!raw-loader!./Components/MapDirections';

const Directions = () => {
  return (
    <>
      <ComponentHeader
        title='Directions Renderer Google Map'
        description='A wrapper around google.maps.DirectionsRenderer'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Directions Map'
            component={MapDirections}
            source={MapDirectionsSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default Directions;
