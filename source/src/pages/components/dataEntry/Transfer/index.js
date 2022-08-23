import React, {Component} from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Basic from './Basic';
import BasicSource from '!raw-loader!./Basic';
import Search from './Search';
import SearchSource from '!raw-loader!./Search';
import Advance from './Advance';
import AdvanceSource from '!raw-loader!./Advance';
import CustomData from './CustomData';
import CustomDataSource from '!raw-loader!./CustomData';
import OneWay from './OneWay';
import OneWaySource from '!raw-loader!./OneWay';
import Pagination from './Pagination';
import PaginationSource from '!raw-loader!./Pagination';
import TableTransfer from './TableTransfer';
import TableTransferDemoSource from '!raw-loader!./TableTransfer';
import TreeTransferDemo from './TreeTransfer';
import TreeTransferDemoSource from '!raw-loader!./TreeTransfer';

class Transfer extends Component {
  render() {
    return (
      <>
        <ComponentHeader
          title='Transfer'
          refUrl='https://ant.design/components/transfer/'
        />
        <AppRowContainer>
          <Col xs={24} xxl={12} key='transfer-a'>
            <AppComponentCard
              title='Basic'
              description='The most basic usage of Transfer involves providing the source data and target keys arrays, plus the rendering and some callback functions.'
              component={Basic}
              source={BasicSource}
            />
          </Col>
          <Col xs={24} xxl={12} key='transfer-b'>
            <AppComponentCard
              title='Search'
              description='Transfer with a search box.'
              component={Search}
              source={SearchSource}
            />
          </Col>
          <Col xs={24} xxl={12} key='transfer-c'>
            <AppComponentCard
              title='Advance'
              description='Advanced Usage of Transfer.'
              component={Advance}
              source={AdvanceSource}
            />
          </Col>
          <Col xs={24} xxl={12} key='transfer-d'>
            <AppComponentCard
              title='Custom Data'
              description='Custom each Transfer Item, and in this way you can render a complex datasource.'
              component={CustomData}
              source={CustomDataSource}
            />
          </Col>
          <Col xs={24} xxl={12} key='transfer-d'>
            <AppComponentCard
              title='One Way'
              description='Use oneWay to makes Transfer to one way style.'
              component={OneWay}
              source={OneWaySource}
            />
          </Col>

          <Col xs={24} xxl={12} key='transfer-d'>
            <AppComponentCard
              title='Tree Transfer Demo'
              description='Customize render list with Tree component.'
              component={TreeTransferDemo}
              source={TreeTransferDemoSource}
            />
          </Col>
          <Col xs={24} xxl={12} key='transfer-d'>
            <AppComponentCard
              title='Table Transfer'
              description='Customize render list with Table component.'
              component={TableTransfer}
              source={TableTransferDemoSource}
            />
          </Col>
          <Col xs={24} xxl={12} key='transfer-d'>
            <AppComponentCard
              title='Pagination'
              description='large count of items with pagination.'
              component={Pagination}
              source={PaginationSource}
            />
          </Col>
        </AppRowContainer>
      </>
    );
  }
}

export default Transfer;
