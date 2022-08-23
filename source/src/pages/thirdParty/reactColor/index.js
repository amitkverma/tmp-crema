import React from 'react';
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker,
} from 'react-color';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import BasicToggle from './BasicToggle';
import BasicToggleSource from '!raw-loader!./BasicToggle';
import BasicPositioning from './BasicPositioning';
import BasicPositioningSource from '!raw-loader!./BasicPositioning';
import CustomPicker from './CustomPicker';
import CustomPickerSource from '!raw-loader!./CustomPicker';
import CustomPointer from './CustomPointer';
import CustomPointerSource from '!raw-loader!./CustomPointer';
import WithRedux from './WithRedux';
import WithReduxSource from '!raw-loader!./WithRedux';
import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import {Col} from 'antd';

const ColorPicker = () => {
  return (
    <>
      <ComponentHeader
        title='React Color'
        description='13 Different Pickers - Sketch, Photoshop, Chrome and many more, Use the building block components to make your own '
        refUrl='http://casesandberg.github.io/react-color/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12} key='reactColor-a'>
          <ComponentCard title='Alpha Picker' component={AlphaPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-b'>
          <ComponentCard title='Hue Picker' component={HuePicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-c'>
          <ComponentCard title='Circle Picker' component={CirclePicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-d'>
          <ComponentCard title='Compact Picker' component={CompactPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-e'>
          <ComponentCard title='Block Picker' component={BlockPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-f'>
          <ComponentCard title='Chrome Picker' component={ChromePicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-g'>
          <ComponentCard title='Github Picker' component={GithubPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-h'>
          <ComponentCard title='Twitter Picker' component={TwitterPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-i'>
          <ComponentCard
            title='WithRedux Picker'
            component={WithRedux}
            source={WithReduxSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-j'>
          <ComponentCard title='Sketch Picker' component={SketchPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-k'>
          <ComponentCard title='Material Picker' component={MaterialPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-l'>
          <ComponentCard
            title='Basic Picker'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-m'>
          <ComponentCard
            title='BasicToggle Picker'
            component={BasicToggle}
            source={BasicToggleSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-n'>
          <ComponentCard
            title='Custom Picker'
            component={CustomPicker}
            source={CustomPickerSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-o'>
          <ComponentCard
            title='CustomPointer Picker'
            component={CustomPointer}
            source={CustomPointerSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-p'>
          <ComponentCard
            title='BasicPositioning'
            component={BasicPositioning}
            source={BasicPositioningSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-q'>
          <ComponentCard title='Photoshop Picker' component={PhotoshopPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-r'>
          <ComponentCard title='Swatches Picker' component={SwatchesPicker} />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ColorPicker;
