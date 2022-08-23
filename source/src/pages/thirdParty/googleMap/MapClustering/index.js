import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import MapClustering from './Components/MarkerClustererEx.js';
import MapClusteringSource from '!raw-loader!./Components/MarkerClustererEx.js';

const MapClusteringEx = () => {
  return (
    <>
      <ComponentHeader
        title='Marker Clusterer'
        description='A wrapper around MarkerClusterer'
        refUrl='https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Marker Clusterer Map'
            component={MapClustering}
            source={MapClusteringSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default MapClusteringEx;
