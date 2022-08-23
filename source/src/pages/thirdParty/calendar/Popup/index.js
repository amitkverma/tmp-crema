import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Popup from './Components/Popup';
import PopupSource from '!raw-loader!./Components/Popup';

const PopupCalendar = () => {
  return (
    <>
      <ComponentHeader
        title='React Big Calendar'
        refUrl='http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Popup Calendar'
            component={Popup}
            source={PopupSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default PopupCalendar;
