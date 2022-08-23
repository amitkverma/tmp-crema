import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import EventHandler from './Components/EventHandler';
import EventHandlerSource from '!raw-loader!./Components/EventHandler';

const EventHandlerEx = () => {
  return (
    <>
      <ComponentHeader
        title='Event Handler Google Map'
        refUrl='http://google-map-react.github.io/google-map-react/map/balderdash/'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Event Handler Map'
            component={EventHandler}
            source={EventHandlerSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default EventHandlerEx;
