import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import SimpleList from './SimpleList';
import SimpleListSource from '!raw-loader!./SimpleList';
import BasicList from './BasicList';
import BasicListSource from '!raw-loader!./BasicList';
import Vertical from './Vertical';
import VerticalSource from '!raw-loader!./Vertical';
import LoadMore from './LoadMore';
import LoadMoreSource from '!raw-loader!./LoadMore';
import Grid from './Grid';
import GridSource from '!raw-loader!./Grid';
import ResponsiveGridList from './ResponsiveGridList';
import ResponsiveGridListSource from '!raw-loader!./ResponsiveGridList';
import ScrollingLoaded from './ScrollingLoaded';
import ScrollingLoadedSource from '!raw-loader!./ScrollingLoaded';

const Lists = () => {
  return (
    <>
      <ComponentHeader
        title='List'
        refUrl='https://ant.design/components/list/'
      />
      <AppRowContainer>
        <Col span={24} key='list-a'>
          <AppComponentCard
            title='Simple List'
            description='Ant Design supports a default list size as well as a large and small size.'
            component={SimpleList}
            source={SimpleListSource}
          />
        </Col>
        <Col span={24} key='list-b'>
          <AppComponentCard
            title='Basic List'
            description='Basic list.'
            component={BasicList}
            source={BasicListSource}
          />
        </Col>
        <Col span={24} key='list-c'>
          <AppComponentCard
            title='Vertical'
            description='Set the itemLayout property to vertical to create a vertical list.'
            component={Vertical}
            source={VerticalSource}
          />
        </Col>
        <Col span={24} key='list-c'>
          <AppComponentCard
            title='Load More'
            description='Load more list with loadMore property.'
            component={LoadMore}
            source={LoadMoreSource}
          />
        </Col>
        <Col span={24} key='list-c'>
          <AppComponentCard
            title='Grid'
            description='Create a grid layout by setting the grid property of List.'
            component={Grid}
            source={GridSource}
          />
        </Col>
        <Col span={24} key='list-c'>
          <AppComponentCard
            title='Responsive Grid List'
            description='Responsive grid list. The size property the is as same as Layout Grid.'
            component={ResponsiveGridList}
            source={ResponsiveGridListSource}
          />
        </Col>
        <Col span={24} key='list-c'>
          <AppComponentCard
            title='Scrolling Loaded'
            description='The example of infinite load with react-infinite-scroll-component.'
            component={ScrollingLoaded}
            source={ScrollingLoadedSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Lists;
