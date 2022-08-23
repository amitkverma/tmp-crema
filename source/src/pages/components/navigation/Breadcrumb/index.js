import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import WithIcon from './WithIcon';
import WithIconSource from '!raw-loader!./WithIcon';
import ConfiguringSeparator from './ConfiguringSeparator';
import ConfiguringSeparatorSource from '!raw-loader!./ConfiguringSeparator';
import ReactRouter from '../Breadcrumb/ReactRouter';
import ReactRouterSource from '!raw-loader!../Breadcrumb/ReactRouter';
import BreadCrumb from './BreadCrumb';
import BreadCrumbSource from '!raw-loader!../Breadcrumb/BreadCrumb';
import Configuring from './Configuring';
import ConfiguringSource from '!raw-loader!../Breadcrumb/Configuring';

const Breadcrumb = () => {
  return (
    <>
      <ComponentHeader
        title='Breadcrumb'
        refUrl='https://ant.design/components/breadcrumb/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='breadcrumb-a'>
          <AppComponentCard
            title='Basic'
            description='The simplest usage.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='breadcrumb-b'>
          <AppComponentCard
            title='WithIcon'
            description='The icon should be placed in front of the text.'
            component={WithIcon}
            source={WithIconSource}
          />
        </Col>
        <Col xs={24} lg={12} key='breadcrumb-c'>
          <AppComponentCard
            title='ConfiguringSeparator'
            description="The separator can be customized by setting the separator property: separator='>'."
            component={ConfiguringSeparator}
            source={ConfiguringSeparatorSource}
          />
        </Col>

        <Col xs={24} lg={12} key='breadcrumb-c'>
          <AppComponentCard
            title='React Router'
            description='Used together with react-router@6+.'
            component={ReactRouter}
            source={ReactRouterSource}
          />
        </Col>
        <Col xs={24} lg={12} key='breadcrumb-c'>
          <AppComponentCard
            title='Bread Crumb'
            description='Breadcrumbs support drop down menu.'
            component={BreadCrumb}
            source={BreadCrumbSource}
          />
        </Col>
        <Col xs={24} lg={12} key='breadcrumb-c'>
          <AppComponentCard
            title='Configuring'
            description='The separator can be customized by setting the separator property: Breadcrumb.Separator.'
            component={Configuring}
            source={ConfiguringSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};
export default Breadcrumb;
