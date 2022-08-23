import React from 'react';
import BtcGraph from './BtcGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {useIntl} from 'react-intl';

const BtcVolumeCurrency = (props) => {
  const {data} = props;

  const {messages} = useIntl();
  return (
    <AppCard
      className='btc-card'
      heightFull
      title={messages['dashboard.btcVolumeByCurency']}>
      <BtcGraph data={data} />
      <div className='btc-footer'>
        {data.map((item) => {
          return (
            <div className='btc-item' key={item.id}>
              <h3 className='btc-item-title' style={{color: item.color}}>
                {item.value}
              </h3>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </AppCard>
  );
};

export default BtcVolumeCurrency;

BtcVolumeCurrency.defaultProps = {
  data: [],
};

BtcVolumeCurrency.propTypes = {
  data: PropTypes.array,
};
