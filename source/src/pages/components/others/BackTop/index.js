import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Custom from './Custom';
import CustomSource from '!raw-loader!./Custom';

const BackTop = () => {
  return (
    <>
      <ComponentHeader
        title='Back Top'
        refUrl='https://ant.design/components/back-top/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='back-a'>
          <AppComponentCard
            title='Basic'
            description='The most basic usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='back-b'>
          <AppComponentCard
            title='Custom'
            description='You can customize the style of the button, just note the size limit: no more than 40px * 40px.'
            component={Custom}
            source={CustomSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default BackTop;
