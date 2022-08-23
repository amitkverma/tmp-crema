import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import ExtraActions from './ExtraActions';
import ExtraActionsSource from '!raw-loader!./ExtraActions';
import SubmitFormInDrawer from './SubmitFormInDrawer';
import SubmitFormInDrawerSource from '!raw-loader!./SubmitFormInDrawer';
import MultiLevelDrawer from './MultiLevelDrawer';
import MultiLevelDrawerSource from '!raw-loader!./MultiLevelDrawer';
import CustomPlacement from './CustomPlacement';
import CustomPlacementSource from '!raw-loader!./CustomPlacement';
import PreviewDrawer from './PreviewDrawer';
import PreviewDrawerSource from '!raw-loader!./PreviewDrawer';
import PresettedSize from './PresettedSize';
import PresettedSizeSource from '!raw-loader!./PresettedSize';

class Drawer extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Drawer'
          refUrl='https://ant.design/components/drawer/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='message-a'>
            <AppComponentCard
              title='Basic'
              description='Basic drawer.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='message-a'>
            <AppComponentCard
              title='Extra Actions'
              description='Extra actions should be placed at corner of drawer in Ant Design, you can using extra prop for that.'
              component={ExtraActions}
              source={ExtraActionsSource}
            />
          </Col>
          <Col xs={24} lg={12} key='message-a'>
            <AppComponentCard
              title='Submit Form In Drawer'
              description='Use a form in Drawer with a submit button.'
              component={SubmitFormInDrawer}
              source={SubmitFormInDrawerSource}
            />
          </Col>
          <Col xs={24} lg={12} key='message-a'>
            <AppComponentCard
              title='MultiLevel Drawer'
              description='Open a new drawer on top of an existing drawer to handle multi branch tasks.'
              component={MultiLevelDrawer}
              source={MultiLevelDrawerSource}
            />
          </Col>
          <Col xs={24} lg={12} key='message-a'>
            <AppComponentCard
              title='Custom Placement'
              description='The Drawer can appear from any edge of the screen.'
              component={CustomPlacement}
              source={CustomPlacementSource}
            />
          </Col>

          <Col xs={24} lg={12} key='message-a'>
            <AppComponentCard
              title='Presetted Size'
              description='The default width (or height) of Drawer is 378px, and there is a presetted large size 736px.'
              component={PresettedSize}
              source={PresettedSizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='message-a'>
            <AppComponentCard
              title='Preview Drawer'
              description='Use Drawer to quickly preview details of an object, such as those in a list.'
              component={PreviewDrawer}
              source={PreviewDrawerSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Drawer;
