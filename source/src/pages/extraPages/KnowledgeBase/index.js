import React, {useState} from 'react';
import {salesData} from '../../../@crema/services/db/extraPages/portFolio/sales';
import {installationData} from '../../../@crema/services/db/extraPages/portFolio/installation';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import Sales from './Sales';
import Installation from './Installation';
import {Divider, Input} from 'antd';
import './index.style.less';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const KnowledgeBase = () => {
  const {messages} = useIntl();

  const [filterText, setFilterText] = useState('');

  const saleQueries =
    filterText !== ''
      ? salesData.filter((data) => data.ques.includes(filterText))
      : salesData;

  const installationQueries =
    filterText !== ''
      ? installationData.filter((data) => data.ques.includes(filterText))
      : installationData;

  const {Search} = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className='know-base'>
      <AppPageMetadata title='Knowledge Base' />
      <AppAnimateGroup type='bottom' animateStyle={{height: 'auto'}}>
        <div className='know-base-header' key='a'>
          <h2>
            <IntlMessages id='knowledge.howHelp' />
          </h2>

          <Search
            className='know-search'
            placeholder={messages['knowledge.AppSkeleton']}
            onSearch={onSearch}
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
          />
        </div>
      </AppAnimateGroup>
      <Divider className='know-divider' />

      <Sales saleQueries={saleQueries} />

      <Installation installationQueries={installationQueries} />
    </div>
  );
};

export default KnowledgeBase;
