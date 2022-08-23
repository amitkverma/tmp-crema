import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import BasicUsage from './BasicUsage';
import BasicUsageSource from '!raw-loader!./BasicUsage';
import ProgressiveLoading from './ProgressiveLoading';
import ProgressiveLoadingSource from '!raw-loader!./ProgressiveLoading';
import PreviewFromOneImage from './PreviewFromOneImage';
import PreviewFromOneImageSource from '!raw-loader!./PreviewFromOneImage';
import FaultTolerant from './FaultTolerant';
import FaultTolerantSource from '!raw-loader!./FaultTolerant';
import MultipleImagePreview from './MultipleImagePreview';
import MultipleImagePreviewSource from '!raw-loader!./MultipleImagePreview';
import CustomPreviewImage from './CustomPreviewImage';
import CustomPreviewImageSource from '!raw-loader!./CustomPreviewImage';

const Image = () => {
  return (
    <>
      <ComponentHeader
        title='Image'
        refUrl='https://ant.design/components/image/'
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Basic Usage'
            description='Click the image to zoom in.'
            component={BasicUsage}
            source={BasicUsageSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='ProgressiveLoading'
            description='Progressive when large image loading.'
            component={ProgressiveLoading}
            source={ProgressiveLoadingSource}
          />
        </Col>

        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Fault Tolerant'
            description='Load failed to display image placeholder.'
            component={FaultTolerant}
            source={FaultTolerantSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='MultipleImagePreview'
            description='Click the left and right switch buttons to preview multiple images.'
            component={MultipleImagePreview}
            source={MultipleImagePreviewSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='CustomPreviewImage'
            description='You can set different preview image.'
            component={CustomPreviewImage}
            source={CustomPreviewImageSource}
          />
        </Col>
        <Col xs={24} lg={12} key='collapse-a'>
          <AppComponentCard
            title='Preview From One Image'
            description='Preview a collection from one image.'
            component={PreviewFromOneImage}
            source={PreviewFromOneImageSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Image;
