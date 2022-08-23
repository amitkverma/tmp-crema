import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Accordion from './Accordion';
import AccordionSource from '!raw-loader!./Accordion';
import NestedPanel from './NestedPanel';
import NestedPanelSource from '!raw-loader!./NestedPanel';
import Borderless from './Borderless';
import BorderlessSource from '!raw-loader!./Borderless';
import CustomPanel from './CustomPanel';
import CustomPanelSource from '!raw-loader!./CustomPanel';
import NoArrow from './NoArrow';
import NoArrowSource from '!raw-loader!./NoArrow';
import ExtraNode from './ExtraNode';
import ExtraNodeSource from '!raw-loader!./ExtraNode';
import GhostCollapse from './GhostCollapse';
import GhostCollapseSource from '!raw-loader!./GhostCollapse';
import Collapsible from './Collapsible';
import CollapsibleSource from '!raw-loader!./Collapsible';

const Collapse = () => {
  return (
    <>
      <ComponentHeader
        title='Collapse'
        refUrl='https://ant.design/components/collapse/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Collapse'
            description='By default, any number of panels can be expanded at a time. The first panel is expanded in this example.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-d'>
          <AppComponentCard
            title='Border less'
            description='A borderless style of Collapse.'
            component={Borderless}
            source={BorderlessSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-b'>
          <AppComponentCard
            title='Accordion'
            description='In accordion mode, only one panel can be expanded at a time.'
            component={Accordion}
            source={AccordionSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-c'>
          <AppComponentCard
            title='Nested Panel'
            description='Collapse is nested inside the Collapse.'
            component={NestedPanel}
            source={NestedPanelSource}
          />
        </Col>

        <Col xs={24} lg={12} key='collapse-e'>
          <AppComponentCard
            title='Custom Panel'
            description='Customize the background, border, margin styles and icon for each panel.'
            component={CustomPanel}
            source={CustomPanelSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-f'>
          <AppComponentCard
            title='No Arrow'
            description='You can hide the arrow icon by passing showArrow={false} to CollapsePanel component.'
            component={NoArrow}
            source={NoArrowSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-f'>
          <AppComponentCard
            title='Extra Node'
            description='More than one panel can be expanded at a time, the first panel is initialized to be active in this case.'
            component={ExtraNode}
            source={ExtraNodeSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-f'>
          <AppComponentCard
            title='GhostCollapse'
            description='Making collapses background to transparent.'
            component={GhostCollapse}
            source={GhostCollapseSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-f'>
          <AppComponentCard
            title='Collapsible'
            description='Specify the trigger area of collapsible by collapsible.'
            component={Collapsible}
            source={CollapsibleSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Collapse;
