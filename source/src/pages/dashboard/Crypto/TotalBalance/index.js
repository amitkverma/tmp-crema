import React from 'react';
import PropTypes from 'prop-types';
import CoinsInfo from './CoinsInfo';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {Button} from 'antd';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const TotalBalance = ({totalBalanceData}) => {
  return (
    <>
      <h2 className='card-outer-title text-uppercase'>
        <IntlMessages id='dashboard.totalBalance' />
      </h2>
      <AppCard className='total-balance-card'>
        <div className='total-balance-header'>
          <div className='ant-column'>
            <h3 className='total-balance-title'>${totalBalanceData.balance}</h3>
            <span className='total-balance-title-sm'>
              <IntlMessages id='dashboard.avlBalance' />
            </span>
          </div>
          <div className='total-balance-btn-view'>
            <Button className='btn btn-light-blue'>
              <IntlMessages id='common.send' />
            </Button>
            <Button type='primary' className='btn'>
              <IntlMessages id='common.receive' />
            </Button>
          </div>
        </div>
        <p className='total-balance-para-middle'>
          <IntlMessages id='dashboard.buyCurrency' />
        </p>
        <div className='total-balance-footer'>
          <CoinsInfo coins={totalBalanceData.coins} />
        </div>
      </AppCard>
    </>
  );
};

export default TotalBalance;

TotalBalance.defaultProps = {
  totalBalanceData: {
    balance: '',
    coins: [],
  },
};

TotalBalance.propTypes = {
  totalBalanceData: PropTypes.object,
};
