import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import GeoLocation from './Components/GeoLocation';
import SimpleMapSource from '!raw-loader!./Components/GeoLocation';

const GeoLocationEx = () => {
  return (
    <>
      <ComponentHeader
        title='Google Map'
        refUrl='http://google-map-react.github.io/google-map-react/map/balderdash/'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Simple Map'
            component={GeoLocation}
            source={SimpleMapSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default GeoLocationEx;
