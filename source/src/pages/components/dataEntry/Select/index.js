import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import SelectSize from './SelectSize';
import SelectSizeSource from '!raw-loader!./SelectSize';
import SearchField from './SearchField';
import SearchFieldSource from '!raw-loader!./SearchField';
import SelectTag from './SelectTag';
import SelectTagSource from '!raw-loader!./SelectTag';
import SelectMultiple from './SelectMultiple';
import SelectMultipleSource from '!raw-loader!./SelectMultiple';
import SelectOption from './SelectOption';
import SelectOptionSource from '!raw-loader!./SelectOption';
import SelectCoordinate from './SelectCoordinate';
import SelectCoordinateSource from '!raw-loader!./SelectCoordinate';
import WithValue from './WithValue';
import WithValueSource from '!raw-loader!./WithValue';
import AutomaticCompletion from './AutomaticCompletion';
import AutomaticCompletionSource from '!raw-loader!./AutomaticCompletion';
import CustomSelectionRender from './CustomSelectionRender';
import CustomSelectionRenderSource from '!raw-loader!./CustomSelectionRender';
import SearchAndSelectUsers from './SearchAndSelectUsers';
import SearchAndSelectUsersSource from '!raw-loader!./SearchAndSelectUsers';
import HideAlreadySelected from './HideAlreadySelected';
import HideAlreadySelectedSource from '!raw-loader!./HideAlreadySelected';
import CustomTagRender from './CustomTagRender';
import CustomTagRenderSource from '!raw-loader!./CustomTagRender';
import BigDate from './BigDate';
import BigDateSource from '!raw-loader!./BigDate';
import SearchWithSort from './SearchWithSort';
import SearchWithSortSource from '!raw-loader!./SearchWithSort';
import CustomDropdown from './CustomDropdown';
import CustomDropdownSource from '!raw-loader!./CustomDropdown';
import BorderedLess from './BorderedLess';
import BorderedLessSource from '!raw-loader!./BorderedLess';
import ResponsiveMaxTagCount from './ResponsiveMaxTagCount';
import ResponsiveMaxTagCountSource from '!raw-loader!./ResponsiveMaxTagCount';

class Select extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Select'
          refUrl='https://ant.design/components/select/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='select-a'>
            <AppComponentCard
              title='Basic'
              description='Basic Usage.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-b'>
            <AppComponentCard
              title='Select With Search Field'
              description='Search the options while expanded.'
              component={SearchField}
              source={SearchFieldSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-c'>
            <AppComponentCard
              title='Select Tag'
              description='Select with tags, transform input to tag (scroll the menu).'
              component={SelectTag}
              source={SelectTagSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-d'>
            <AppComponentCard
              title='Select Multiple'
              description='Multiple selection, selecting from existing items.'
              component={SelectMultiple}
              source={SelectMultipleSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-e'>
            <AppComponentCard
              title='Option Group'
              description='Using OptGroup to group the options.'
              component={SelectOption}
              source={SelectOptionSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-f'>
            <AppComponentCard
              title='Coordinate'
              description='Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.'
              component={SelectCoordinate}
              source={SelectCoordinateSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-g'>
            <AppComponentCard
              title='Get Value'
              description='As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item.'
              component={WithValue}
              source={WithValueSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-h'>
            <AppComponentCard
              title='Automatic Completion'
              description='Try to copy Lucy,Jack and paste to the input. Only available in tags and multiple mode.'
              component={AutomaticCompletion}
              source={AutomaticCompletionSource}
            />
          </Col>

          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Custom Selection Render'
              description='Specify the prop name of Option which will be rendered in select box.'
              component={CustomSelectionRender}
              source={CustomSelectionRenderSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Search And Select Users'
              description='A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.'
              component={SearchAndSelectUsers}
              source={SearchAndSelectUsersSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Hide Already Selected'
              description='Hide already selected options in the dropdown.'
              component={HideAlreadySelected}
              source={HideAlreadySelectedSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Custom Tag Render'
              description='Hide already selected options in the dropdown.'
              component={CustomTagRender}
              source={CustomTagRenderSource}
            />
          </Col>

          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Search With Sort'
              description='Search the options with sorting.'
              component={SearchWithSort}
              source={SearchWithSortSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Custom Dropdown'
              description='Customize the dropdown menu via dropdownRender.'
              component={CustomDropdown}
              source={CustomDropdownSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Bordered Less'
              description='Bordered-less style component.'
              component={BorderedLess}
              source={BorderedLessSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Responsive Max Tag Count'
              description='Auto collapse to tag with responsive case. Not recommend use in large form case since responsive calculation has a perf cost.'
              component={ResponsiveMaxTagCount}
              source={ResponsiveMaxTagCountSource}
            />
          </Col>
          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Size'
              description='The height of the input field for the select defaults to 32px. If size is set to large, the height will be 40px, and if set to small, 24px.'
              component={SelectSize}
              source={SelectSizeSource}
            />
          </Col>

          <Col xs={24} lg={12} key='select-i'>
            <AppComponentCard
              title='Big Date'
              description='Select use virtual scroll which get better performance than 3.0.'
              component={BigDate}
              source={BigDateSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Select;
