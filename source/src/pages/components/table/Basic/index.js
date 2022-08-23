import React from 'react';
import {Col} from 'antd';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import ComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppRowContainer from '../../../../@crema/core/AppRowContainer/AppRowSimpleContainer';

import Simple from './Simple';
import SimpleSource from '!raw-loader!./Simple';
import Selection from './Selection';
import SelectionSource from '!raw-loader!./Selection';
import Size from './Size';
import SizeSource from '!raw-loader!./Size';
import Title from './Title';
import TitleSource from '!raw-loader!./Title';
import ColRowSpan from './ColRowSpan';
import ColRowSpanSource from '!raw-loader!./ColRowSpan';
import JsxStyleApi from './JsxStyleApi';
import JsxStyleApiSource from '!raw-loader!./JsxStyleApi';
import FilerAndSorter from './FilerAndSorter';
import FilerAndSorterSource from '!raw-loader!./FilerAndSorter';
import FilterInTree from './FilterInTree';
import FilterInTreeSource from '!raw-loader!./FilterInTree';
import MultipleSorter from './MultipleSorter';
import MultipleSorterSource from '!raw-loader!./MultipleSorter';
import Ajax from './Ajax';
import AjaxSource from '!raw-loader!./Ajax';
import PaginationSettings from './PaginationSettings';
import PaginationSettingsSource from '!raw-loader!./PaginationSettings';

const BasicTable = () => {
  return (
    <>
      <ComponentHeader
        title='Table'
        refUrl='https://ant.design/components/table/'
      />
      <AppRowContainer>
        <Col span={24} key='basic-a'>
          <AppComponentCard
            title='Basic Usage'
            description='Simple table with actions.'
            component={Simple}
            source={SimpleSource}
          />
        </Col>
        <Col span={24} key='basic-b'>
          <AppComponentCard
            title='Selection'
            description='Rows can be selectable by making first column as a selectable column.'
            component={Selection}
            source={SelectionSource}
          />
        </Col>
        <Col span={24} key='basic-c'>
          <AppComponentCard
            title='Size'
            description='There are two compacted table sizes.'
            component={Size}
            source={SizeSource}
          />
        </Col>
        <Col span={24} key='basic-d'>
          <AppComponentCard
            title='Title'
            description='Add border, title and footer for table.'
            component={Title}
            source={TitleSource}
          />
        </Col>
        <Col span={24} key='basic-e'>
          <AppComponentCard
            title='ColRow Span'
            description='Table column title supports colSpan that set in column.'
            component={ColRowSpan}
            source={ColRowSpanSource}
          />
        </Col>
        <Col span={24} key='basic-e'>
          <AppComponentCard
            title='JSX Style API'
            description='Using JSX style API (introduced in 2.5.0)'
            component={JsxStyleApi}
            source={JsxStyleApiSource}
          />
        </Col>
        <Col span={24} key='basic-e'>
          <AppComponentCard
            title='Filer And Sorter'
            component={FilerAndSorter}
            description='Use filters to generate filter menu in columns, onFilter to determine filtered result, and filterMultiple to indicate whether its multiple or single selection.'
            source={FilerAndSorterSource}
          />
        </Col>
        <Col span={24} key='basic-e'>
          <AppComponentCard
            title='Filter In Tree'
            description='You can use filterMode to change default filter interface, options: menu(default) and tree.'
            component={FilterInTree}
            source={FilterInTreeSource}
          />
        </Col>
        <Col span={24} key='basic-e'>
          <AppComponentCard
            title='Multiple Sorter'
            description='column.sorter support multiple to config the priority of sort columns. Though sorter.compare to customize compare function. You can also leave it empty to use the interactive only.'
            component={MultipleSorter}
            source={MultipleSorterSource}
          />
        </Col>
        <Col span={24} key='basic-e'>
          <AppComponentCard
            title='Ajax'
            description='This example shows how to fetch and present data from a remote server, and how to implement filtering and sorting in server side by sending related parameters to server.'
            component={Ajax}
            source={AjaxSource}
          />
        </Col>
        <Col span={24} key='data-i'>
          <AppComponentCard
            title='Pagination Settings'
            description='Table pagination settings.'
            component={PaginationSettings}
            source={PaginationSettingsSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default BasicTable;
