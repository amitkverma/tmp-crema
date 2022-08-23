import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Trigger from './Trigger';
import TriggerSource from '!raw-loader!./Trigger';
import Placement from './Placement';
import PlacementSource from '!raw-loader!./Placement';
import Control from './Control';
import ControlSource from '!raw-loader!./Control';
import ArrowPoint from './ArrowPoint';
import ArrowPointSource from '!raw-loader!./ArrowPoint';
import HoverWithClickPopover from './HoverWithClickPopover';
import HoverWithClickPopoverSource from '!raw-loader!./HoverWithClickPopover';

const Popover = () => {
  return (
    <>
      <ComponentHeader
        title='Popover'
        refUrl='https://ant.design/components/popover/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='popover-a'>
          <AppComponentCard
            title='Basic'
            description='The most basic example. The size of the floating layer depends on the contents region.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='popover-b'>
          <AppComponentCard
            title='Trigger'
            description='Mouse to click, focus and move in.'
            component={Trigger}
            source={TriggerSource}
          />
        </Col>
        <Col xs={24} lg={12} key='popover-c'>
          <AppComponentCard
            title='Control'
            description='Use visible prop to control the display of the card.'
            component={Control}
            source={ControlSource}
          />
        </Col>
        <Col xs={24} lg={12} key='popover-d'>
          <AppComponentCard
            title='Arrow Point'
            description='The arrow points to the center of the target element, which set arrowPointAtCenter.'
            component={ArrowPoint}
            source={ArrowPointSource}
          />
        </Col>
        <Col xs={24} lg={12} key='popover-e'>
          <AppComponentCard
            title='Placement'
            description='There are 12 placement options available.'
            component={Placement}
            source={PlacementSource}
          />
        </Col>
        <Col xs={24} lg={12} key='popover-e'>
          <AppComponentCard
            title='Hover With Click Popover'
            description='The following example shows how to create a popover which can be hovered and clicked.'
            component={HoverWithClickPopover}
            source={HoverWithClickPopoverSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Popover;
