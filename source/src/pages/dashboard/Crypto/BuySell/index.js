import React from 'react';
import TabForm from './TabForm';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {Tabs} from 'antd';
import './index.style.less';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const BuySell = ({buySell}) => {
  const {TabPane} = Tabs;
  return (
    <AppCard
      className='buy-sell-card'
      heightFull
      actions={[
        <a href='#' key={1}>
          <IntlMessages id='dashboard.buyNow' />
        </a>,
      ]}>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='Buy' key='1'>
          <TabForm data={buySell.buyData} />
        </TabPane>
        <TabPane tab='Sell' key='2'>
          <TabForm data={buySell.sellData} />
        </TabPane>
      </Tabs>
    </AppCard>
  );
};

export default BuySell;

BuySell.defaultProps = {
  buySell: {
    buyData: {
      value: '',
      price: '',
      amount: '',
    },
    sellData: {
      value: '',
      price: '',
      amount: '',
    },
  },
};

BuySell.propTypes = {
  buySell: PropTypes.object,
};
