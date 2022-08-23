import React, {Component} from 'react';

import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Size from './Size';
import SizeSource from '!raw-loader!./Size';
import Formatter from './Formatter';
import FormatterSource from '!raw-loader!./Formatter';
import Decimal from './Decimal';
import DecimalSource from '!raw-loader!./Decimal';
import Disabled from './Disabled';
import DisabledSource from '!raw-loader!./Disabled';
import PrePostTab from './PrePostTab';
import PrePostTabSource from '!raw-loader!./PrePostTab';
import HighPrecisionDecimals from './HighPrecisionDecimals';
import HighPrecisionDecimalsSource from '!raw-loader!./HighPrecisionDecimals';
import Keyboard from './Keyboard';
import KeyboardSource from '!raw-loader!./Keyboard';
import OutOfRange from './OutOfRange';
import OutOfRangeSource from '!raw-loader!./OutOfRange';
import Borderless from './Borderless';
import BorderlessSource from '!raw-loader!./Borderless';

class InputNumber extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Input Number'
          refUrl='https://ant.design/components/input-number/'
        />
        <AppRowContainer>
          <Col xs={24} lg={12} key='input-a'>
            <AppComponentCard
              title='Basic'
              description='Numeric-only input box.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-b'>
            <AppComponentCard
              title='Size'
              description='There are three sizes available to a numeric input box. By default, the size is 32px. The two additional sizes are large and small which means 40px and 24px, respectively.'
              component={Size}
              source={SizeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-c'>
            <AppComponentCard
              title='Formatter'
              description='Display value within its situation with formatter, and we usually use parser at the same time.'
              component={Formatter}
              source={FormatterSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-d'>
            <AppComponentCard
              title='Decimal'
              description='Click the button to toggle between available and disabled states.'
              component={Decimal}
              source={DecimalSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-e'>
            <AppComponentCard
              title='Disabled'
              description='Click the button to toggle between available and disabled states.'
              component={Disabled}
              source={DisabledSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-e'>
            <AppComponentCard
              title='Pre / Post Tab'
              description='Using pre & post tabs example.'
              component={PrePostTab}
              source={PrePostTabSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-e'>
            <AppComponentCard
              title='High Precision Decimals'
              description='Use stringMode to support high precision decimals support. onChange will return string value instead. You need polyfill of BigInt if browser not support.'
              component={HighPrecisionDecimals}
              source={HighPrecisionDecimalsSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-e'>
            <AppComponentCard
              title='Key board'
              description='Control keyboard behavior by keyboard.'
              component={Keyboard}
              source={KeyboardSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-e'>
            <AppComponentCard
              title='Out Of Range'
              description='Show warning style when value is out of range by control.'
              component={OutOfRange}
              source={OutOfRangeSource}
            />
          </Col>
          <Col xs={24} lg={12} key='input-e'>
            <AppComponentCard
              title='Border less'
              description='No border.'
              component={Borderless}
              source={BorderlessSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default InputNumber;
