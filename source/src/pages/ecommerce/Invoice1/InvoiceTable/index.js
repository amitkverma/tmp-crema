import React from 'react';
import invoiceData from '../../../../@crema/services/db/extraPages/invoice/invoiceData';
import AppTableContainer from '../../../../@crema/core/AppTableContainer';
import InvoiceColumns from './InvoiceColumns';
import '../index.style.less';

const InvoiceTable = () => {
  return (
    <AppTableContainer
      className='invoice-table'
      data={invoiceData.products}
      columns={InvoiceColumns}
    />
  );
};

export default InvoiceTable;
