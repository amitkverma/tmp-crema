import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Components/Basic';
import BasicSource from '!raw-loader!./Components/Basic';

const BasicCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Basic Calendar'
            component={Basic}
            source={BasicSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default BasicCalendar;
