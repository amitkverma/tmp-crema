import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Border from './Border';
import BorderSource from '!raw-loader!./Border';
import CustomSize from './CustomSize';
import CustomSizeSource from '!raw-loader!./CustomSize';
import Responsive from './Responsive';
import ResponsiveSource from '!raw-loader!./Responsive';
import Vertical from './Vertical';
import VerticalSource from '!raw-loader!./Vertical';
import VerticalBorder from './VerticalBorder';
import VerticalBorderSource from '!raw-loader!./VerticalBorder';

const Descriptions = () => {
  return (
    <>
      <ComponentHeader
        title='Descriptions'
        refUrl='https://ant.design/components/comment/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Basic'
            description='Simplest Usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Vertical'
            description='Simplest Usage.'
            component={Vertical}
            source={VerticalSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Border'
            description='Descriptions with border and background color.'
            component={Border}
            source={BorderSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Custom Size'
            description='Custom sizes to fit in a variety of containers.'
            component={CustomSize}
            source={CustomSizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Responsive'
            description='Responsive configuration enables perfect presentation on small screen devices.'
            component={Responsive}
            source={ResponsiveSource}
          />
        </Col>

        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Vertical Border'
            description='Descriptions with border and background color.'
            component={VerticalBorder}
            source={VerticalBorderSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Descriptions;
