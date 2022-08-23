import React from 'react';
import invoiceData from '../../../@crema/services/db/extraPages/invoice/invoiceData';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import './index.style.less';

const Header = () => {
  return (
    <div className='invoice-header'>
      <div className='invoice-logo'>
        <img alt='logo' src={'/assets/images/logo.png'} />
      </div>

      <div className='invoice-header-row'>
        <div className='invoice-header-item'>
          <h3>{invoiceData.company.name}</h3>
          <p>{invoiceData.company.address1}</p>
          <p>{invoiceData.company.address2}</p>
          <p>Phone: {invoiceData.company.phone}</p>
        </div>

        <div className='invoice-header-item'>
          <h3>
            <IntlMessages id='invoice.client' />
          </h3>
          <p>{invoiceData.client.name}</p>
          <p>{invoiceData.client.phone}</p>
          <p>{invoiceData.client.email}</p>
        </div>

        <div className='invoice-header-item'>
          <h3>
            <IntlMessages id='invoice.invoice' />
          </h3>
          <p>
            <IntlMessages id='invoice.id' />: {invoiceData.invoice.id}
          </p>
          <p>
            <IntlMessages id='invoice.issued' />: {invoiceData.invoice.date}
          </p>
          <p>
            <IntlMessages id='invoice.dueOn' />: {invoiceData.invoice.dueDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
