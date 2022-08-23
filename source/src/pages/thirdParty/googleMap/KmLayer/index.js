import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import MapKmLayer from './Components/MapKmLayer';
import KmLayerSource from '!raw-loader!./Components/MapKmLayer';

const KmLayerEx = () => {
  return (
    <>
      <ComponentHeader
        title='KmlLayer Google Map'
        description='A wrapper around google.maps.KmlLayer'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='KmlLayer Map'
            component={MapKmLayer}
            source={KmLayerSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default KmLayerEx;
