import React from 'react';

import Simple from './Simple';
import SimpleSource from '!raw-loader!./Simple';
import Horizontal from './Horizontal';
import HorizontalSource from '!raw-loader!./Horizontal';
import MultipleDrop from './MultipleDrop';
import MultipleDropSource from '!raw-loader!./MultipleDrop';
import WithHooks from './WithHooks';
import WithHooksSource from '!raw-loader!./WithHooks';
import ComponentCard from '@crema/core/AppComponentCard/ComponentCardWithoutAnim';
import ComponentHeader from '@crema/core/AppComponentHeader';
import {Col, Row} from 'antd';

const ReactBeautifulDnd = () => {
  return (
    <>
      <ComponentHeader
        title='React Beautiful Dnd'
        description='Beautiful and accessible drag and drop for lists with React'
        refUrl='https://react-beautiful-dnd.netlify.com/?path=/story/single-vertical-list--basic'
      />

      <Row gutter={{xs: 16, sm: 16, md: 32}}>
        <Col xs={24} xl={12} key='dnd-a'>
          <ComponentCard
            title='Simple'
            component={Simple}
            source={SimpleSource}
          />
        </Col>
        <Col xs={24} xl={12} key='dnd-b'>
          <ComponentCard
            title='WithHooks'
            component={WithHooks}
            source={WithHooksSource}
          />
        </Col>
        <Col span={24} key='dnd-c'>
          <ComponentCard
            title='MultipleDrop'
            component={MultipleDrop}
            source={MultipleDropSource}
          />
        </Col>
        <Col span={24} key='dnd-d'>
          <ComponentCard
            title='Horizontal'
            component={Horizontal}
            source={HorizontalSource}
          />
        </Col>
      </Row>
    </>
  );
};

export default ReactBeautifulDnd;
