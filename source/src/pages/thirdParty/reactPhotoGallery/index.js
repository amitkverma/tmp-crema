import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import WithImageViewer from './WithImageViewer';
import WithImageViewerSource from '!raw-loader!./WithImageViewer';

import BasicRow from './BasicRow';
import BasicRowSource from '!raw-loader!./BasicRow';
import BasicColumn from './BasicColumn';
import BasicColumnSource from '!raw-loader!./BasicColumn';
import ReactSortableHoc from './ReactSortableHoc';
import ReactSortableHocSource from '!raw-loader!./ReactSortableHoc';
import CustomImage from './CustomImage';
import CustomImageSource from '!raw-loader!./CustomImage';

const ReactPhotoGallery = () => {
  return (
    <>
      <ComponentHeader
        title='React Photo Gallery'
        description='esponsive, accessible, composable, and customizable image gallery component'
        refUrl='http://neptunian.github.io/react-photo-gallery/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12} key='gallery-a'>
          <ComponentCard
            title='Basic Row'
            component={BasicRow}
            source={BasicRowSource}
          />
        </Col>
        <Col xs={24} xl={12} key='gallery-b'>
          <ComponentCard
            title='Basic Column'
            component={BasicColumn}
            source={BasicColumnSource}
          />
        </Col>
        <Col xs={24} xl={12} key='gallery-c'>
          <ComponentCard
            title='React Sortable Hoc'
            component={ReactSortableHoc}
            source={ReactSortableHocSource}
          />
        </Col>
        <Col xs={24} xl={12} key='gallery-d'>
          <ComponentCard
            title='Selection with custom ImageComponent'
            description="You can pass in your own component to the gallery via the ImageComponent prop. This would give you full control of what each individual image looks like in the Gallery. Here is an example of giving your gallery 'Selection' capability."
            component={CustomImage}
            source={CustomImageSource}
          />
        </Col>
        <Col xs={24} xl={12} key='gallery-e'>
          <ComponentCard
            title='With Image Viewer'
            component={WithImageViewer}
            source={WithImageViewerSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactPhotoGallery;
