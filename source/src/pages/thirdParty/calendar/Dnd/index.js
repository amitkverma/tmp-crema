import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Dnd from './Components/Dnd';
import DndSource from '!raw-loader!./Components/Dnd';

const DndCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Dnd Calendar'
            component={Dnd}
            source={DndSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default DndCalendar;
