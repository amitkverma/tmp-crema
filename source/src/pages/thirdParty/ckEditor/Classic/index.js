import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import ClassicEditor from './Classic';
import ClassicEditorSource from '!raw-loader!./Classic';

const ReactTable = () => {
  return (
    <>
      <ComponentHeader
        title='Classic CK Editor'
        refUrl='https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Classic Editor'
            description='Classic editor shows a boxed editing area with a toolbar, placed in a specific position on the page.'
            component={ClassicEditor}
            source={ClassicEditorSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactTable;
