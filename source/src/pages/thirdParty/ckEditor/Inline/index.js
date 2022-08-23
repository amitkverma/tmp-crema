import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import InlineEditor from './Inline';
import InlineEditorSource from '!raw-loader!./Inline';

const ReactTable = () => {
  return (
    <>
      <ComponentHeader
        title='Inline CK Editor'
        refUrl='https://ckeditor.com/docs/ckeditor5/latest/examples/builds/inline-editor.html'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Inline Editor'
            description='Inline editor lets you create your content directly in its target location with the help of a floating toolbar that apprears when the editable text is focused.'
            component={InlineEditor}
            source={InlineEditorSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactTable;
