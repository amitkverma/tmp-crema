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
import TextWithoutHeadingStyle from './TextWithoutHeadingStyle';
import TextWithoutHeadingStyleSource from '!raw-loader!./TextWithoutHeadingStyle';

class Divider extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Divider'
          refUrl='https://ant.design/components/divider/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='divider-a'>
            <AppComponentCard
              title='Horizontal'
              description='Divider is horizontal by default. You can add text within Divider.'
              component={Horizontal}
              source={HorizontalSource}
            />
          </Col>

          <Col xs={24} lg={12} key='divider-b'>
            <AppComponentCard
              title='Divider With Title'
              description='Divider with inner title, set orientation="left/right" to align it.'
              component={DividerWithTitle}
              source={DividerWithTitleSource}
            />
          </Col>
          <Col xs={24} lg={12} key='divider-b'>
            <AppComponentCard
              title='TextWithoutHeadingStyle'
              description='You can use non-heading style of divider text by setting plain.'
              component={TextWithoutHeadingStyle}
              source={TextWithoutHeadingStyleSource}
            />
          </Col>
          <Col xs={24} lg={12} key='divider-b'>
            <AppComponentCard
              title='Vertical'
              description='Use type="vertical" make it vertical.'
              component={Vertical}
              source={VerticalSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Divider;
