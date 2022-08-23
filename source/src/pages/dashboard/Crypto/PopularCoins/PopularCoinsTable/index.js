import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import {Avatar} from 'antd';
import '../index.style.less';
import {red} from '@ant-design/colors';

const columns = [
  {
    title: 'No.',
    dataIndex: `id`,
    key: 'id',
    render: (id) => <span>{id}.</span>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <div className='popular-coin-user-info'>
        <Avatar
          src={name.image}
          style={{backgroundColor: name.image ? name.color : red[5]}}
        />
        <div className='popular-coin-user-info-content'>
          <h3>{name.title}</h3>
        </div>
      </div>
    ),
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCap',
    key: 'marketCap',
  },
  {
    title: 'Volume 24h',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: '24h %',
    dataIndex: 'h',
    key: 'h',
  },
];

const PopularCoinsTable = (props) => {
  const {popularCoins} = props;

  return (
    <AppTableContainer
      hoverColor
      className='popular-coin-table'
      data={popularCoins}
      columns={columns}
    />
  );
};

export default PopularCoinsTable;

PopularCoinsTable.defaultProps = {
  popularCoins: [],
};

PopularCoinsTable.propTypes = {
  popularCoins: PropTypes.array,
};
