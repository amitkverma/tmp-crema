import React from 'react';
import AccountGraph from './AccountGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import './index.style.less';

const YourAccount = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['dashboard.yourAccount']}
      className='your-account-card'>
      <div className='your-account-card-graph'>
        <AccountGraph data={data} />
      </div>
    </AppCard>
  );
};

export default YourAccount;

YourAccount.defaultProps = {
  data: [],
};

YourAccount.propTypes = {
  data: PropTypes.array,
};
