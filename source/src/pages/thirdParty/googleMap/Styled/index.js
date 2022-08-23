import React from 'react';
import {Col} from 'antd';

import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';

import Styled from './Components/StyledMap';
import StyledSource from '!raw-loader!./Components/StyledMap';

const StyledMap = () => {
  return (
    <>
      <ComponentHeader
        title='Styled Google Map'
        description='A wrapper around Custom style'
        refUrl='http://google-map-react.github.io/google-map-react/map/balderdash/'
      />

      <AppRowSimpleContainer>
        <Col span={24}>
          <ComponentCard
            title='Styled Map'
            component={Styled}
            source={StyledSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default StyledMap;
