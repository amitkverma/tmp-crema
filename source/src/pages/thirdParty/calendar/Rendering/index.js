import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Rendering from './Components/Rendering';
import RenderingSource from '!raw-loader!./Components/Rendering';

const RenderingCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />
      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Rendering Calendar'
            component={Rendering}
            source={RenderingSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default RenderingCalendar;
