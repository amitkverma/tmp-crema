import React, {useEffect} from 'react';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import TotalBalance from './TotalBalance';
import Coins from './Coins';
import Bitcoin from './Bitcoin';
import BuySell from './BuySell';
import BtcVolumeCurrency from './BtcVolumeCurrency';
import PopularCoins from './PopularCoins';
import LatestNews from './LatestNews';
import CryptoMarketActivity from './CryptoMarketActivity';
import {AppInfoView} from '../../../@crema';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCryptoData} from '../../../redux/actions/Dashboard';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const Crypto = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetCryptoData());
  }, [dispatch]);

  const cryptoData = useSelector(({dashboard}) => dashboard.cryptoData);

  return (
    <>
      <AppPageMetadata title='Crypto Dashboard' />
      {cryptoData ? (
        <AppRowContainer>
          <Col xs={24} lg={10} key={'a'}>
            <TotalBalance totalBalanceData={cryptoData.totalBalanceData} />
          </Col>
          <Col xs={24} lg={14} className='mb-0' key={'b'}>
            <Coins coinsData={cryptoData.coinsData} />
          </Col>
          <Col xs={24} lg={16} key={'c'}>
            <Bitcoin coinGraphData={cryptoData.coinGraphData} />
          </Col>
          <Col xs={24} lg={8} key={'d'}>
            <BuySell buySell={cryptoData.buySell} />
          </Col>
          <Col xs={24} lg={8} key={'e'}>
            <BtcVolumeCurrency data={cryptoData.btcChartData} />
          </Col>
          <Col xs={24} lg={16} key={'f'}>
            <PopularCoins popularCoins={cryptoData.popularCoins} />
          </Col>
          <Col xs={24} lg={12} key={'g'}>
            <LatestNews newsData={cryptoData.newsData} />
          </Col>
          <Col xs={24} lg={12} key={'h'}>
            <CryptoMarketActivity
              marketGraphData={cryptoData.marketGraphData}
            />
          </Col>
        </AppRowContainer>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default Crypto;
