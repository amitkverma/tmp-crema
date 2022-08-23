import React, {useCallback, useEffect, useState} from 'react';
import BitcoinGraph from './BitcoinGraph';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {Tabs, Select} from 'antd';
import './index.style.less';

const Bitcoin = (props) => {
  const {coinGraphData} = props;

  const {TabPane} = Tabs;

  const {Option} = Select;

  const onGetCoinData = useCallback(
    (coin) => {
      switch (coin) {
        case 'Bitcoin': {
          return coinGraphData.bitcoin;
        }
        case 'Litecoin': {
          return coinGraphData.litecoin;
        }
        case 'Ripple': {
          return coinGraphData.ripple;
        }
        default:
          return coinGraphData.bitcoin;
      }
    },
    [coinGraphData],
  );

  const [coinType, setCoinType] = useState('Bitcoin');
  const [coinData, setCoinData] = useState(onGetCoinData(coinType));

  useEffect(() => {
    setCoinData(onGetCoinData(coinType));
  }, [coinType, onGetCoinData]);

  const handleSelectValue = (event) => {
    setCoinType(event.target.value);
  };

  const {messages} = useIntl();

  return (
    <AppCard>
      <div className='bitcoin-header'>
        <Select
          value={coinType}
          onChange={handleSelectValue}
          className='bitcoin-select-box'>
          <Option value='Bitcoin' className='bitcoin-select-box-option'>
            {messages['dashboard.bitcoin']}
          </Option>
          <Option value='Litecoin' className='bitcoin-select-box-option'>
            {messages['dashboard.litecoin']}
          </Option>
          <Option value='Ripple' className='bitcoin-select-box-option'>
            {messages['dashboard.ripple']}
          </Option>
        </Select>
        <div className='bitcoin-title'>
          <h3>$7280.45</h3>
          <span>0.8%</span>
        </div>
      </div>

      <Tabs className='bitcoin-tabs' defaultActiveKey='1'>
        <TabPane tab='Yearly' key='1'>
          <BitcoinGraph data={coinData.yearlyData} />
        </TabPane>
        <TabPane tab='Monthly' key='2'>
          <BitcoinGraph data={coinData.monthlyData} />
        </TabPane>
        <TabPane tab='Weekly' key='3'>
          <BitcoinGraph data={coinData.weeklyData} />
        </TabPane>
        <TabPane tab='Today' key='4'>
          <BitcoinGraph data={coinData.dailyData} />
        </TabPane>
      </Tabs>
    </AppCard>
  );
};

export default Bitcoin;

Bitcoin.defaultProps = {
  coinGraphData: {
    bitcoin: {
      yearlyData: [],
      monthlyData: [],
      weeklyData: [],
      dailyData: [],
    },
    litecoin: {
      yearlyData: [],
      monthlyData: [],
      weeklyData: [],
      dailyData: [],
    },
    ripple: {
      yearlyData: [],
      monthlyData: [],
      weeklyData: [],
      dailyData: [],
    },
  },
};

Bitcoin.propTypes = {
  coinGraphData: PropTypes.object,
};
