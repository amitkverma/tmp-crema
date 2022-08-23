import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import PopUpInfo from './Components/MapPopupInfo';
import PopUpInfoSource from '!raw-loader!./Components/MapPopupInfo';

const PopUpInfoEx = () => {
  return (
    <>
      <ComponentHeader
        title='InfoWindow Google Map'
        description='A wrapper around google.maps.InfoWindow'
        refUrl='https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Google Map InfoWindow'
            component={PopUpInfo}
            source={PopUpInfoSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default PopUpInfoEx;
