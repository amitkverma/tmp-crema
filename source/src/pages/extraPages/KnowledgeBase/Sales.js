import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import KBItem from './KBItem';
import PropTypes from 'prop-types';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import './index.style.less';

const Sales = ({saleQueries}) => {
  return (
    <div className='know-section know-sale'>
      <h3>
        <IntlMessages id='knowledge.sales' />
      </h3>
      <AppRowContainer>
        {saleQueries.map((sale, index) => (
          <KBItem data={sale} key={index} />
        ))}
      </AppRowContainer>
    </div>
  );
};

export default Sales;

Sales.propTypes = {
  saleQueries: PropTypes.array.isRequired,
};
