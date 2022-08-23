import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Horizontal from './Horizontal';
import HorizontalSource from '!raw-loader!./Horizontal';
import Vertical from './Vertical';
import VerticalSource from '!raw-loader!./Vertical';
import DividerWithTitle from './DividerWithTitle';
import DividerWithTitleSource from '!raw-loader!./DividerWithTitle';

class Divider extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Divider'
          refUrl='https://ant.design/components/divider/'
        />
        <AppRowContainer>
          <Col xs={24} key='divider-b'>
            <AppComponentCard
              title='Vertical'
              component={Vertical}
              source={VerticalSource}
            />
          </Col>
          <Col xs={24} lg={12} key='divider-a'>
            <AppComponentCard
              title='Horizontal'
              component={Horizontal}
              source={HorizontalSource}
            />
          </Col>

          <Col xs={24} lg={12} key='divider-b'>
            <AppComponentCard
              title='DividerWithTitle'
              description='Divider with inner title, set orientation="left/right" to align it.'
              component={DividerWithTitle}
              source={DividerWithTitleSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Divider;
