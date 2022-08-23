import React from 'react';
import MarketGraph from './MarketGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {geekblue, green, red} from '@ant-design/colors';
import './index.style.less';

const CryptoMarketActivity = (props) => {
  const {marketGraphData} = props;

  const {messages} = useIntl();
  return (
    <AppCard
      className='crypto-market-activity-card'
      heightFull
      title={messages['dashboard.cryptoMarketActivity']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}>
      <MarketGraph marketGraphData={marketGraphData} />
      <div className='market-footer'>
        <div className='market-footer-action'>
          <div className='market-footer-action-item'>
            <span className='dot' style={{backgroundColor: green[6]}} />
            <span>
              <IntlMessages id='common.low' />
            </span>
          </div>
          <div className='market-footer-action-item'>
            <span className='dot' style={{backgroundColor: geekblue[5]}} />
            <span>
              <IntlMessages id='common.medium' />
            </span>
          </div>
          <div className='market-footer-action-item'>
            <span className='dot' style={{backgroundColor: red[5]}} />
            <span>
              <IntlMessages id='common.high' />
            </span>
          </div>
        </div>
        <div className='market-footer-content'>
          <div className='market-footer-content-item'>
            <h3 className='market-footer-content-item-title'>1356</h3>
            <span>
              <IntlMessages id='dashboard.openDeals' />
            </span>
          </div>

          <div className='market-footer-content-item'>
            <h3 className='market-footer-content-item-title'>$5.9B</h3>
            <span>
              <IntlMessages id='dashboard.dealsVolume' />
            </span>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default CryptoMarketActivity;

CryptoMarketActivity.defaultProps = {
  marketGraphData: [],
};

CryptoMarketActivity.propTypes = {
  marketGraphData: PropTypes.array,
};
