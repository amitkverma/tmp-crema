import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import Balloon from './Balloon';
import BalloonSource from '!raw-loader!./Balloon';

const ReactTable = () => {
  return (
    <>
      <ComponentHeader
        title='Balloon CK editor'
        refUrl='https://ckeditor.com/docs/ckeditor5/latest/examples/builds/balloon-editor.html'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Balloon Editor'
            description='Balloon editor lets you create your content directly in its target location with the help of a balloon toolbar that appears next to the selected editable document element.'
            component={Balloon}
            source={BalloonSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactTable;
