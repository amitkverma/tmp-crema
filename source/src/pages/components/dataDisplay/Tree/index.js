import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import BasicControl from './BasicControl';
import BasicControlSource from '!raw-loader!./BasicControl';
import Dragable from './Dragable';
import DragableSource from '!raw-loader!./Dragable';
import LoadData from './LoadData';
import LoadDataSource from '!raw-loader!./LoadData';
import Searchable from './Searchable';
import SearchableSource from '!raw-loader!./Searchable';
import TreeLine from './TreeLine';
import TreeLineSource from '!raw-loader!./TreeLine';
import CustomizeIcon from './CustomizeIcon';
import CustomizeIconSource from '!raw-loader!./CustomizeIcon';
import CustomizeCollapse from './CustomizeCollapse';
import CustomizeCollapseSource from '!raw-loader!./CustomizeCollapse';
import Directory from './Directory';
import DirectorySource from '!raw-loader!./Directory';

const Tree = () => {
  return (
    <>
      <ComponentHeader
        title='Tree'
        refUrl='https://ant.design/components/tree/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='tree-a'>
          <AppComponentCard
            title='Basic'
            description='The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tree-b'>
          <AppComponentCard
            title='Searchable'
            description='Searchable Tree.'
            component={Searchable}
            source={SearchableSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tree-c'>
          <AppComponentCard
            title='Basic Controled'
            description='Controlled mode lets parent nodes reflect the status of child nodes more intelligently.'
            component={BasicControl}
            source={BasicControlSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tree-d'>
          <AppComponentCard
            title='Dragable'
            description='Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.'
            component={Dragable}
            source={DragableSource}
          />
        </Col>

        <Col xs={24} lg={12} key='tree-f'>
          <AppComponentCard
            title='Load Data'
            description='To load data asynchronously when click to expand a treeNode.'
            component={LoadData}
            source={LoadDataSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tree-f'>
          <AppComponentCard
            title='CustomizeIcon'
            description='You can customize icons for different nodes.'
            component={CustomizeIcon}
            source={CustomizeIconSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tree-f'>
          <AppComponentCard
            title='Customize Collapse'
            description='customize collapse/expand icon of tree node'
            component={CustomizeCollapse}
            source={CustomizeCollapseSource}
          />
        </Col>
        <Col xs={24} lg={12} key='tree-f'>
          <AppComponentCard
            title='Directory'
            description='Built-in directory tree. multiple support ctrl(Windows) / command(Mac) selection.'
            component={Directory}
            source={DirectorySource}
          />
        </Col>
        <Col xs={24} lg={12} key='tree-e'>
          <AppComponentCard
            title='Tree Line'
            description='Tree with connected line between nodes, turn on by showLine, customize the preseted icon by switcherIcon.'
            component={TreeLine}
            source={TreeLineSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Tree;
