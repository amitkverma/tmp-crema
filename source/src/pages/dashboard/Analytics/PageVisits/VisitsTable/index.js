import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import '../index.style.less';
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';

const columns = [
  {
    title: 'Page name',
    dataIndex: 'page',
    key: 'page',
  },
  {
    title: 'Page Views',
    dataIndex: 'pageView',
    key: 'pageView',
    render: (pageView) => (
      <span className='up-icon'>
        <CaretUpOutlined />
        {pageView}
      </span>
    ),
  },
  {
    title: 'Unique Visitors',
    dataIndex: 'visitors',
    key: 'visitors',
    render: (visitors) => (
      <span className='down-icon'>
        <CaretDownOutlined />
        {visitors}
      </span>
    ),
  },
];

const VisitsTable = ({visitsData}) => {
  return (
    <AppTableContainer
      className='page-visit-table'
      hoverColor
      data={visitsData}
      columns={columns}
      scroll={{y: 435}}
    />
  );
};

export default VisitsTable;

VisitsTable.defaultProps = {
  visitsData: [],
};

VisitsTable.propTypes = {
  visitsData: PropTypes.array,
};
