import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Color from './Color';
import ColorSource from '!raw-loader!./Color';
import LastNode from './LastNode';
import LastNodeSource from '!raw-loader!./LastNode';
import Custom from './Custom';
import CustomSource from '!raw-loader!./Custom';
import TimelimeLabelDemo from './TimelimeLabelDemo';
import TimelimeLabelDemoSource from '!raw-loader!./TimelimeLabelDemo';
import Alternate from './Alternate';
import AlternateSource from '!raw-loader!./Alternate';
import RightAlternate from './RightAlternate';
import RightAlternateSource from '!raw-loader!./RightAlternate';

const TimeLine = () => {
  return (
    <>
      <ComponentHeader
        title='TimeLine'
        refUrl='https://ant.design/components/timeline/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='timeline-a'>
          <AppComponentCard
            title='Basic'
            description='Basic timeline.'
            component={Basic}
            source={BasicSource}
          />
        </Col>

        <Col xs={24} lg={12} key='timeline-c'>
          <AppComponentCard
            title='LastNode'
            description='When the timeline is incomplete and ongoing, put a ghost node at last. Set pending as truthy value to enable displaying pending item.'
            component={LastNode}
            source={LastNodeSource}
          />
        </Col>
        <Col xs={24} lg={12} key='timeline-d'>
          <AppComponentCard
            title='Custom'
            description='Set a node as an icon or other custom element.'
            component={Custom}
            source={CustomSource}
          />
        </Col>
        <Col xs={24} lg={12} key='timeline-d'>
          <AppComponentCard
            title='RightAlternate'
            description='Right alternate timeline.'
            component={RightAlternate}
            source={RightAlternateSource}
          />
        </Col>

        <Col xs={24} lg={12} key='timeline-d'>
          <AppComponentCard
            title='Alternate'
            description='Alternate timeline.'
            component={Alternate}
            source={AlternateSource}
          />
        </Col>
        <Col xs={24} lg={12} key='timeline-b'>
          <AppComponentCard
            title='Color'
            description='Set the color of circles.'
            component={Color}
            source={ColorSource}
          />
        </Col>

        <Col xs={24} lg={12} key='timeline-d'>
          <AppComponentCard
            title='Time lime Label Demo'
            description='Use label show time alone.'
            component={TimelimeLabelDemo}
            source={TimelimeLabelDemoSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default TimeLine;
