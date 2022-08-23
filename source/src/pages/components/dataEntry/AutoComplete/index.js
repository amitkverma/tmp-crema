import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Customized from './Customized';
import CustomizedSource from '!raw-loader!./Customized';
import CustomizeInputComponent from './CustomizeInputComponent';
import CustomizeInputComponentSource from '!raw-loader!./CustomizeInputComponent';
import NonCaseSensitiveAutoComplete from './NonCaseSensitiveAutoComplete';
import NonCaseSensitiveAutoCompleteSource from '!raw-loader!./NonCaseSensitiveAutoComplete';
import LookupPatterns from './LookupPatterns';
import LookupPatternsSource from '!raw-loader!./LookupPatterns';

const AutoComplete = () => {
  return (
    <>
      <ComponentHeader
        title='Auto Complete'
        refUrl='https://ant.design/components/auto-complete/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='complete-a'>
          <AppComponentCard
            title='Basic'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='complete-b'>
          <AppComponentCard
            title='Customized'
            component={Customized}
            source={CustomizedSource}
          />
        </Col>
        <Col xs={24} lg={12} key='complete-c'>
          <AppComponentCard
            title='Customize Input Component'
            component={CustomizeInputComponent}
            source={CustomizeInputComponentSource}
          />
        </Col>
        <Col xs={24} lg={12} key='complete-d'>
          <AppComponentCard
            title='LookupPatterns'
            component={LookupPatterns}
            source={LookupPatternsSource}
          />
        </Col>
        <Col xs={24} lg={12} key='complete-e'>
          <AppComponentCard
            title='Non Case Sensitive Auto Complete'
            component={NonCaseSensitiveAutoComplete}
            source={NonCaseSensitiveAutoCompleteSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default AutoComplete;
