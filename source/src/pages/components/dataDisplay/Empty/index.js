import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import ChoseImage from './ChoseImage';
import ChoseImageSource from '!raw-loader!./ChoseImage';
import Customize from './Customize';
import CustomizeSource from '!raw-loader!./Customize';
import ConfigProvider from './ConfigProvider';
import ConfigProviderSource from '!raw-loader!./ConfigProvider';
import NoDescription from './NoDescription';
import NoDescriptionSource from '!raw-loader!./NoDescription';

const Empty = () => {
  return (
    <>
      <ComponentHeader
        title='Empty'
        refUrl='https://ant.design/components/empty/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Basic'
            description='Simplest Usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Chose Image'
            description='You can choose another style of image by setting image to Empty.PRESENTED_IMAGE_SIMPLE.'
            component={ChoseImage}
            source={ChoseImageSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Customize'
            description='Customize image source, image size, description and extra content.'
            component={Customize}
            source={CustomizeSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='No Description'
            description='Simplest Usage with no description.'
            component={NoDescription}
            source={NoDescriptionSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Config Provider'
            description='Use ConfigProvider set global Empty style.'
            component={ConfigProvider}
            source={ConfigProviderSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Empty;
