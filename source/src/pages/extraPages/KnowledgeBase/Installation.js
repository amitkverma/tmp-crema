import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import KBItem from './KBItem';
import PropTypes from 'prop-types';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import './index.style.less';

const Installation = ({installationQueries}) => {
  return (
    <div className='know-section'>
      <h3>
        <IntlMessages id='knowledge.installation' />
      </h3>
      <AppRowContainer>
        {installationQueries.map((data) => (
          <KBItem data={data} key={data.id} />
        ))}
      </AppRowContainer>
    </div>
  );
};

export default Installation;

Installation.propTypes = {
  installationQueries: PropTypes.array.isRequired,
};
