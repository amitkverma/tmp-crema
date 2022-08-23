import React from 'react';
import invoiceData from '../../../../@crema/services/db/extraPages/invoice/invoiceData';
import AppTableContainer from '../../../../@crema/core/AppTableContainer';
import InvoiceColumns from './InvoiceColumns';
import '../../Invoice1/index.style.less';
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
