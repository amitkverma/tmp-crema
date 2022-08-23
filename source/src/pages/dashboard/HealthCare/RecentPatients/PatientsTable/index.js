import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import {Avatar} from 'antd';
import '../index.style.less';
import AppMenu from '../../../../../@crema/core/AppMenu';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <div className='recent-patients-user-info'>
        <Avatar src={name.profile_pic} />
        <div className='recent-patients-user-info-content'>
          <h3>{name.title}</h3>
        </div>
      </div>
    ),
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'Assigned Dr',
    dataIndex: 'assignedDr',
    key: 'assignedDr',
  },
  {
    title: 'Admit Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <span
        className='recent-patients-badge'
        style={{
          color: status.color,
          backgroundColor: status.color + '44',
        }}>
        {status.title}
      </span>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <AppMenu />,
  },
];

const PatientsTable = ({recentPatients}) => {
  return (
    <AppTableContainer
      hoverColor
      className='recent-patients-table'
      data={recentPatients}
      columns={columns}
    />
  );
};

export default PatientsTable;

PatientsTable.defaultProps = {
  recentPatients: [],
};

PatientsTable.propTypes = {
  recentPatients: PropTypes.array,
};
