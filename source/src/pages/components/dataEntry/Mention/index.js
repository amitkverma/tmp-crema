import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Placement from './Placement';
import PlacementSource from '!raw-loader!./Placement';
import AsynchronousLoading from './AsynchronousLoading';
import AsynchronousLoadingSource from '!raw-loader!./AsynchronousLoading';
import CustomizeSuggestions from './CustomizeSuggestions';
import CustomizeSuggestionsSource from '!raw-loader!./CustomizeSuggestions';
import IconImage from './IconImage';
import IconImageSource from '!raw-loader!./IconImage';
import Controlled from './Controlled';
import ControlledSource from '!raw-loader!./Controlled';
import MultilineMode from './MultilineMode';
import MultilineModeSource from '!raw-loader!./MultilineMode';
import SuggestionContainer from './SuggestionContainer';
import SuggestionContainerSource from '!raw-loader!./SuggestionContainer';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import WithForm from './WithForm';
import WithFormSource from '!raw-loader!./WithForm';

class Mention extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Mention'
          refUrl='https://ant.design/components/mention/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='mention-a'>
            <AppComponentCard
              title='Basic'
              description='Basic usage.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-b'>
            <AppComponentCard
              title='Placement'
              description='Change the suggestions placement.'
              component={Placement}
              source={PlacementSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-c'>
            <AppComponentCard
              title='AsynchronousLoading'
              description='async'
              component={AsynchronousLoading}
              source={AsynchronousLoadingSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-d'>
            <AppComponentCard
              title='CustomizeSuggestions'
              description='Customize Trigger Token by prefix props. Default to @, Array<string> also supported.'
              component={CustomizeSuggestions}
              source={CustomizeSuggestionsSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-e'>
            <AppComponentCard
              title='IconImage'
              component={IconImage}
              source={IconImageSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-f'>
            <AppComponentCard
              title='Controlled'
              component={Controlled}
              source={ControlledSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-g'>
            <AppComponentCard
              title='MultilineMode'
              component={MultilineMode}
              source={MultilineModeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-h'>
            <AppComponentCard
              title='SuggestionContainer'
              component={SuggestionContainer}
              source={SuggestionContainerSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-i'>
            <AppComponentCard
              title='Disabled'
              description='Configurate disabled and readOnly.'
              component={Disabled}
              source={DisabledSource}
            />
          </Col>
          <Col xs={24} lg={12} key='mention-i'>
            <AppComponentCard
              title='WithForm'
              description='Controlled mode, for example, to work with Form.'
              component={WithForm}
              source={WithFormSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Mention;
