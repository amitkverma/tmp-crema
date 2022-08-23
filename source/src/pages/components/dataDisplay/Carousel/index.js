import React from 'react';
import {Col} from 'antd';

import './index.less';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Vertical from './Vertical';
import VerticalSource from '!raw-loader!./Vertical';
import FadeIn from './FadeIn';
import FadeInSource from '!raw-loader!./FadeIn';
import ScrollAutomatically from './ScrollAutomatically';
import ScrollAutomaticallySource from '!raw-loader!./ScrollAutomatically';

const Carousel = () => {
  return (
    <>
      <ComponentHeader
        title='Carousel'
        refUrl='https://ant.design/components/carousel/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='carousel-a'>
          <AppComponentCard
            title='Basic'
            description='Basic usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='carousel-b'>
          <AppComponentCard
            title='Position'
            description='There are 4 position options available.'
            component={Vertical}
            source={VerticalSource}
          />
        </Col>
        <Col xs={24} lg={12} key='carousel-c'>
          <AppComponentCard
            title='Fade In'
            description='Slides use fade for transition.'
            component={FadeIn}
            source={FadeInSource}
          />
        </Col>
        <Col xs={24} lg={12} key='carousel-d'>
          <AppComponentCard
            title='ScrollAutomatically'
            description='Timing of scrolling to the next card/picture.'
            component={ScrollAutomatically}
            source={ScrollAutomaticallySource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Carousel;
