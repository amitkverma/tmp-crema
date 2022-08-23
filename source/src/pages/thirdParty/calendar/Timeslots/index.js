import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Timeslots from './Components/Timeslots';
import TimeslotsSource from '!raw-loader!./Components/Timeslots';

const DirectionsCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Timeslots Calendar'
            component={Timeslots}
            source={TimeslotsSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default DirectionsCalendar;
