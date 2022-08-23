import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Unit from './Unit';
import UnitSource from '!raw-loader!./Unit';
import InCard from './InCard';
import InCardSource from '!raw-loader!./InCard';
import CountdownDemoCard from './CountdownDemoCard';
import CountdownDemoCardSource from '!raw-loader!./CountdownDemoCard';

const Statistic = () => {
  return (
    <>
      <ComponentHeader
        title='Statistic'
        refUrl='https://ant.design/components/statistic/'
      />
      <AppRowContainer>
        <Col xs={24} xl={12} key='tab-a'>
          <AppComponentCard
            title='Unit'
            description='Add unit through prefix and suffix.'
            component={Unit}
            source={UnitSource}
          />
        </Col>
        <Col xs={24} xl={12} key='tab-a'>
          <AppComponentCard
            title='InCard'
            description='Display statistic data in Card.'
            component={InCard}
            source={InCardSource}
          />
        </Col>
        <Col xs={24} xl={12} key='tab-a'>
          <AppComponentCard
            title='Basic'
            description='Simplest Usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} xl={12} key='tab-a'>
          <AppComponentCard
            title='Count down Demo Card'
            description='Countdown component.'
            component={CountdownDemoCard}
            source={CountdownDemoCardSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Statistic;
