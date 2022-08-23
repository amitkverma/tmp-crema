import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import ThreeSizesOfInput from './ThreeSizesOfInput';
import ThreeSizesOfInputSource from '!raw-loader!./ThreeSizesOfInput';
import PostTab from './PostTab';
import PostTabSource from '!raw-loader!./PostTab';
import SearchBox from './SearchBox';
import SearchBoxSource from '!raw-loader!./SearchBox';
import InputGroups from './InputGroups';
import InputGroupsSource from '!raw-loader!./InputGroups';
import AutosizingTheHeight from './AutosizingTheHeight';
import AutosizingTheHeightSource from '!raw-loader!./AutosizingTheHeight';
import TextArea from './TextAreas';
import TextAreaSource from '!raw-loader!./TextAreas';
import FormatTooltipInput from './FormatTooltipInput';
import FormatTooltipInputSource from '!raw-loader!./FormatTooltipInput';
import Passwordbox from './Passwordbox';
import PasswordboxSource from '!raw-loader!./Passwordbox';
import TextareaWithCharacterCounting from './TextareaWithCharacterCounting';
import TextareaWithCharacterCountingSource from '!raw-loader!./TextareaWithCharacterCounting';
import Focus from './Focus';
import FocusSource from '!raw-loader!./Focus';
import WithClearIcon from './WithClearIcon';
import WithClearIconSource from '!raw-loader!./WithClearIcon';
import SearchBoxWithLoading from './SearchBoxWithLoading';
import SearchBoxWithLoadingSource from '!raw-loader!./SearchBoxWithLoading';

const Input = () => {
  return (
    <>
      <ComponentHeader
        title='Input'
        refUrl='https://ant.design/components/input/'
      />
      <AppRowContainer>
        <Col span={24} key='input-a'>
          <AppComponentCard
            title='Input Groups'
            description='Input.Group example.'
            component={InputGroups}
            source={InputGroupsSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-b'>
          <AppComponentCard
            title='Basic'
            description='Basic usage example.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-c'>
          <AppComponentCard
            title='Three Sizes Of Input'
            description='There are three sizes of an Input box: large (40px), default (32px) and small (24px).'
            component={ThreeSizesOfInput}
            source={ThreeSizesOfInputSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-d'>
          <AppComponentCard
            title='Search Box'
            description='Search when onSearch.'
            component={SearchBox}
            source={SearchBoxSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-e'>
          <AppComponentCard
            title='TextArea'
            description='For multi-line input.'
            component={TextArea}
            source={TextAreaSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-f'>
          <AppComponentCard
            title='Auto sizing The Height'
            description='autoSize prop for a textarea type of Input makes the height to automatically adjust based on the content. An option object can be provided to autoSize to specify the minimum and maximum number of lines the textarea will automatically adjust.'
            component={AutosizingTheHeight}
            source={AutosizingTheHeightSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-g'>
          <AppComponentCard
            title='Post Tab'
            description=' post tabs example.'
            component={PostTab}
            source={PostTabSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-h'>
          <AppComponentCard
            title='Format Tooltip Input'
            description='You can use the Input in conjunction with Tooltip component to create a Numeric Input, which can provide a good experience for extra-long content display.'
            component={FormatTooltipInput}
            source={FormatTooltipInputSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-h'>
          <AppComponentCard
            title='Password box'
            description='Input type of password.'
            component={Passwordbox}
            source={PasswordboxSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-h'>
          <AppComponentCard
            title='Textarea With Character Counting'
            description='Show character counting.'
            component={TextareaWithCharacterCounting}
            source={TextareaWithCharacterCountingSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-h'>
          <AppComponentCard
            title='Focus'
            description='Focus with additional option.'
            component={Focus}
            source={FocusSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-h'>
          <AppComponentCard
            title='With Clear Icon'
            description='Input box with the remove icon, click the icon to delete everything.'
            component={WithClearIcon}
            source={WithClearIconSource}
          />
        </Col>
        <Col xs={24} lg={12} key='input-h'>
          <AppComponentCard
            title='SearchBoxWithLoading'
            description='Search loading when onSearch.'
            component={SearchBoxWithLoading}
            source={SearchBoxWithLoadingSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Input;
