import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import CustomEditor from './Custom';
import CustomEditorSource from '!raw-loader!./Custom';

const ReactTable = () => {
  return (
    <>
      <ComponentHeader
        title='Custom CK Editor'
        refUrl='https://ckeditor.com/docs/ckeditor5/latest/examples/builds/custom-build.html'
      />

      <AppRowSimpleContainer>
        <Col xs={16}>
          <ComponentCard
            title='Custom build Editor'
            description='The editor in this example was customized to offer a limited subset of editing features, provided mainly by the ckeditor5-basic-styles and ckeditor5-highlight packages. This kind of customization is possible with a custom editor build, perfectly tailored to the needs of the application.'
            component={CustomEditor}
            source={CustomEditorSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactTable;
