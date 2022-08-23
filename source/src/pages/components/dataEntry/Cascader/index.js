import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import DefaultValue from './DefaultValue';
import DefaultValueSource from '!raw-loader!./DefaultValue';
import CustomTrigger from './CustomTrigger';
import CustomTriggerSource from '!raw-loader!./CustomTrigger';
import Hover from './Hover';
import HoverSource from '!raw-loader!./Hover';
import DisabledOption from './DisabledOption';
import DisabledOptionSource from '!raw-loader!./DisabledOption';
import ChangeOnSelect from './ChangeOnSelect';
import ChangeOnSelectSource from '!raw-loader!./ChangeOnSelect';
import Size from './Size';
import SizeSource from '!raw-loader!./Size';
import CustomRender from './CustomRender';
import CustomRenderSource from '!raw-loader!./CustomRender';
import Search from './Search';
import SearchSource from '!raw-loader!./Search';
import LoadOptions from './LoadOptions';
import LoadOptionsSource from '!raw-loader!./LoadOptions';
import Multiple from '../Cascader/Multiple';
import MultipleSource from '!raw-loader!../Cascader/Multiple';
import CustomDropDown from '../Cascader/CustomDropDown';
import CustomDropDownSource from '!raw-loader!../Cascader/CustomDropDown';
import CustomFieldNames from '../Cascader/CustomFieldNames';
import CustomFieldNamesSource from '!raw-loader!../Cascader/CustomFieldNames';

const Cascader = () => {
  return (
    <>
      <ComponentHeader
        title='Cascader'
        refUrl='https://ant.design/components/cascader/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='cascader-a'>
          <AppComponentCard
            title='Basic'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-b'>
          <AppComponentCard
            title='DefaultValue'
            component={DefaultValue}
            source={DefaultValueSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-c'>
          <AppComponentCard
            title='Custom Trigger'
            component={CustomTrigger}
            source={CustomTriggerSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-d'>
          <AppComponentCard
            title='Hover'
            component={Hover}
            source={HoverSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-e'>
          <AppComponentCard
            title='Disabled Option'
            component={DisabledOption}
            source={DisabledOptionSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-f'>
          <AppComponentCard
            title='Load Options'
            component={LoadOptions}
            source={LoadOptionsSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-g'>
          <AppComponentCard
            title='Change On Select'
            component={ChangeOnSelect}
            source={ChangeOnSelectSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-h'>
          <AppComponentCard
            title='Custom Render'
            component={CustomRender}
            source={CustomRenderSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-i'>
          <AppComponentCard
            title='Search'
            component={Search}
            source={SearchSource}
          />
        </Col>
        <Col xs={24} lg={12} key='cascader-j'>
          <AppComponentCard title='Size' component={Size} source={SizeSource} />
        </Col>
        <Col xs={24} lg={12} key='datepicker-j'>
          <AppComponentCard
            title='Multiple'
            component={Multiple}
            source={MultipleSource}
          />
        </Col>
        <Col xs={24} lg={12} key='datepicker-j'>
          <AppComponentCard
            title='Custom Drop Down'
            component={CustomDropDown}
            source={CustomDropDownSource}
          />
        </Col>
        <Col xs={24} lg={12} key='datepicker-j'>
          <AppComponentCard
            title='Custom Field Names'
            component={CustomFieldNames}
            source={CustomFieldNamesSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Cascader;
