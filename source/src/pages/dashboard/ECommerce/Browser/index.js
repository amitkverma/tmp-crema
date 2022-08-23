import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {List} from 'antd';
import PropTypes from 'prop-types';
import './index.style.less';

const BrowserCell = ({item}) => {
  return (
    <List.Item className='browser-cell item-hover'>
      <span className='browser-thumb'>
        <img alt='' src={item.icon} />
      </span>

      <div className='browser-content'>
        <h3>{item.name}</h3>
        <p>{item.value}</p>
      </div>
    </List.Item>
  );
};

BrowserCell.propTypes = {
  item: PropTypes.object,
};
const Browser = ({browserData}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.browser']}>
      <List
        dataSource={browserData}
        renderItem={(item, index) => <BrowserCell item={item} key={index} />}
      />
    </AppCard>
  );
};

export default Browser;

Browser.propTypes = {
  browserData: PropTypes.array,
};
