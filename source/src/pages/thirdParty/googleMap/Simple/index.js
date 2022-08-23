import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';

import SimpleMap from './Components/SimpleMap';
import SimpleMapSource from '!raw-loader!./Components/SimpleMap';
import AppRowContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

const TransferLists = () => {
  return (
    <>
      <ComponentHeader
        title='Google Map'
        description='A wrapper around google.maps.Map'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map/'
      />

      <AppRowContainer>
        <Col span={24}>
          <ComponentCard
            title='Simple Map'
            component={SimpleMap}
            source={SimpleMapSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default TransferLists;
