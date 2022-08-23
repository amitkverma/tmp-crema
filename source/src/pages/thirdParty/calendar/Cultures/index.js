import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Cultures from './Components/Cultures';
import CulturesSource from '!raw-loader!./Components/Cultures';

const CulturesCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />
      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Cultures Calendar'
            component={Cultures}
            source={CulturesSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default CulturesCalendar;
