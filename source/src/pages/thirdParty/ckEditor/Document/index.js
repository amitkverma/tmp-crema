import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import DocumentEditor from './Document';
import DocumentEditorSource from '!raw-loader!./Document';

const ReactTable = () => {
  return (
    <>
      <ComponentHeader
        title='Document CK Editor'
        refUrl='https://ckeditor.com/docs/ckeditor5/latest/examples/builds/document-editor.html'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Document Editor'
            description='The editor in this example is a feature–rich build focused on rich text editing experience similar to the native word processors. It works best for creating documents which are usually later printed or exported to PDF files.'
            component={DocumentEditor}
            source={DocumentEditorSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactTable;
