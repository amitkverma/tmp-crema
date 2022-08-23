import React from 'react';
import PopularCoinsTable from './PopularCoinsTable';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {useIntl} from 'react-intl';

const PopularCoins = (props) => {
  const {popularCoins} = props;
  const {messages} = useIntl();

  return (
    <AppCard
      className='popular-coin-card no-card-space-ltr-rtl'
      heightFull
      title={messages['dashboard.popularCoins']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}>
      <PopularCoinsTable popularCoins={popularCoins} />
    </AppCard>
  );
};

export default PopularCoins;

PopularCoins.defaultProps = {
  popularCoins: [],
};

PopularCoins.propTypes = {
  popularCoins: PropTypes.array,
};
