import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import ColorTag from './ColorTag';
import ColorTagSource from '!raw-loader!./ColorTag';
import Dynamic from './Dynamic';
import DynamicSource from '!raw-loader!./Dynamic';
import HotTag from './HotTag';
import HotTagSource from '!raw-loader!./HotTag';
import Controlled from './Controlled';
import ControlledSource from '!raw-loader!./Controlled';
import Icon from './Icon';
import IconSource from '!raw-loader!./Icon';
import Animate from './Animate';
import AnimateSource from '!raw-loader!./Animate';
import StatusTag from './StatusTag';
import StatusTagSource from '!raw-loader!./StatusTag';

const Tag = () => {
  return (
    <>
      <ComponentHeader
        title='Tag'
        refUrl='https://ant.design/components/tabs/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='tag-a'>
          <AppComponentCard
            title='Basic'
            description='Usage of basic Tag, and it could be closable by set closable property. Closable Tag supports onClose events.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tag-b'>
          <AppComponentCard
            title='Dynamic'
            description='Generating a set of Tags by array, you can add and remove dynamically.'
            component={Dynamic}
            source={DynamicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tag-c'>
          <AppComponentCard
            title='Checkable'
            description='Checkable Tag works like Checkbox, click it to toggle checked state.'
            component={HotTag}
            source={HotTagSource}
          />
        </Col>

        <Col xs={24} lg={12} key='tag-d'>
          <AppComponentCard
            title='Controlled'
            description='By using the visible prop, you can control the close state of Tag.'
            component={Controlled}
            source={ControlledSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tag-d'>
          <AppComponentCard
            title='Icon'
            description='By using the visible prop, you can control the close state of Tag.'
            component={Icon}
            source={IconSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tag-d'>
          <AppComponentCard
            title='Animate'
            description='Animating the Tag by using rc-tween-one.'
            component={Animate}
            source={AnimateSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tag-d'>
          <AppComponentCard
            title='StatusTag'
            description='Animating the Tag by using rc-tween-one.'
            component={StatusTag}
            source={StatusTagSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tag-d'>
          <AppComponentCard
            title='Color Tag'
            description='We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.'
            component={ColorTag}
            source={ColorTagSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tag;
