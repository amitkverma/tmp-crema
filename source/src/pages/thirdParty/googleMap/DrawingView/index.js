import React from 'react';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import {Col} from 'antd';

import DrawingView from './Components/DrawingView';
import DrawingViewSource from '!raw-loader!./Components/DrawingView';

const DrawingViewEx = () => {
  return (
    <>
      <ComponentHeader
        title='Drawing View Google Map'
        description='A wrapper around google.maps.drawing.DrawingManager'
        refUrl='https://developers.google.com/maps/documentation/javascript/reference/#DrawingManager/'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Drawing View Map'
            component={DrawingView}
            source={DrawingViewSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default DrawingViewEx;
