import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Placement from './Placement';
import PlacementSource from '!raw-loader!./Placement';
import ArrowPoint from './ArrowPoint';
import ArrowPointSource from '!raw-loader!./ArrowPoint';
import ColorfulTooltip from './ColorfulTooltip';
import ColorfulTooltipSource from '!raw-loader!./ColorfulTooltip';

class Tooltip extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Tooltip'
          refUrl='https://ant.design/components/tooltip/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='tooltip-a'>
            <AppComponentCard
              title='Basic'
              description='The simplest usage.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='tooltip-b'>
            <AppComponentCard
              title='ArrowPoint'
              description='By specifying arrowPointAtCenter prop, the arrow will point to the center of the target element.'
              component={ArrowPoint}
              source={ArrowPointSource}
            />
          </Col>
          <Col xs={24} lg={12} key='tooltip-c'>
            <AppComponentCard
              title='Placement'
              description='There are 12 placement options available.'
              component={Placement}
              source={PlacementSource}
            />
          </Col>
          <Col xs={24} lg={12} key='tooltip-c'>
            <AppComponentCard
              title='ColorfulTooltip'
              description='We preset a series of colorful Tooltip styles for use in different situations.'
              component={ColorfulTooltip}
              source={ColorfulTooltipSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Tooltip;
