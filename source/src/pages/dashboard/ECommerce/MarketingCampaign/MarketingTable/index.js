import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import {Avatar} from 'antd';
import '../index.style.less';

const OrderTable = ({marketingCampaignData}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <div className='marketingUserInfo'>
          <Avatar src={name.icon} />
          <div className='marketingUserInfoContent'>
            <h3>{name.name}</h3>
            <p>{name.description}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Spend',
      dataIndex: 'spend',
      key: 'spend',
    },
    {
      title: 'Graph',
      dataIndex: 'graph',
      key: 'graph',
      render: (graph) => (
        <div className='graphItem'>
          <span>
            {graph.growth ? (
              <img
                src={'/assets/images/dashboard/growth_icon.svg'}
                alt='growth_icon'
              />
            ) : (
              <img
                src={'/assets/images/dashboard/decries_icon.svg'}
                alt='decries_icon'
              />
            )}
          </span>
          <span style={{color: `${graph.growth ? '#0A8FDC' : '#F44D50'}`}}>
            {graph.graph}
          </span>
          <span>{graph.growth ? 'Up' : 'Down'}</span>
        </div>
      ),
    },
  ];

  return (
    <AppTableContainer
      className='marketingCampaignTable'
      data={marketingCampaignData}
      columns={columns}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  marketingCampaignData: [],
};

OrderTable.propTypes = {
  marketingCampaignData: PropTypes.array,
};
