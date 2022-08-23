import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import {Avatar} from 'antd';
import '../index.style.less';

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
      <div className='deals-user-info'>
        <Avatar src={name.logo} />
        <div className='deals-user-info-content'>
          <h3>{name.name}</h3>
        </div>
      </div>
    ),
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },
];
const DealsTable = (props) => {
  const {dealsTableData} = props;

  return (
    <AppTableContainer
      hoverColor
      className='deals-table'
      data={dealsTableData}
      columns={columns}
    />
  );
};

export default DealsTable;

DealsTable.defaultProps = {
  dealsTableData: [],
};

DealsTable.propTypes = {
  dealsTableData: PropTypes.array,
};
