import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import BalloonBlockEditor from './BalloonBlock';
import BalloonBlockEditorSource from '!raw-loader!./BalloonBlock';

const ReactTable = () => {
  return (
    <>
      <ComponentHeader
        title='Balloon Block CK Editor'
        refUrl='https://ckeditor.com/docs/ckeditor5/latest/examples/builds/balloon-block-editor.html'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Balloon Block Editor'
            description='Balloon block editor lets you create your content directly in its target location with the help of two toolbars:'
            component={BalloonBlockEditor}
            source={BalloonBlockEditorSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactTable;
