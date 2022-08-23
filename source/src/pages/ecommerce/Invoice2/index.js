import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Header from './Header';
import InvoiceTable from './InvoiceTable';
import AppCard from '../../../@crema/core/AppCard';
import '../Invoice1/index.style.less';
import './index.style.less';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const Invoice2 = () => {
  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Invoice' />
      <div className='invoice' key='invoice2'>
        <div className='invoice-container'>
          <AppCard className='invoice-card no-card-space'>
            <Header />
            <InvoiceTable />
          </AppCard>
          <h4 className='invoice-footer-title'>
            <IntlMessages id='invoice.thankYou' />
          </h4>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default Invoice2;
