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
      <div className='ticket-support-user-info'>
        <Avatar src={name.image} />
        <div className='ticket-support-user-info-content'>
          <h3>{name.name}</h3>
        </div>
      </div>
    ),
  },
  {
    title: 'Ticket ID',
    dataIndex: 'ticketId',
    key: 'ticketId',
  },
  {
    title: 'Create Date',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
];

// const getData = (data) => {
//   if (isBreakPointDown('xl')) {
//     return data.slice(0, 9);
//   } else {
//     return data.slice(0, 7);
//   }
// };

const TicketSupportTable = (props) => {
  const ticketSupportData = props.ticketSupportData;

  return (
    <AppTableContainer
      hoverColor
      className='ticket-support-table'
      data={ticketSupportData}
      columns={columns}
    />
  );
};

export default TicketSupportTable;

TicketSupportTable.defaultProps = {
  ticketSupportData: [],
};

TicketSupportTable.propTypes = {
  ticketSupportData: PropTypes.array,
};
