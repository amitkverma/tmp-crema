import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from '../../../../../@crema/core/AppTableContainer';
import '../index.style.less';
import {Avatar} from 'antd';

const StudentRankingsTable = ({studentRankings}) => {
  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <div className='student-info'>
          <Avatar className='student-avatar' src={name.profile_pic} size={40} />
          <h3 className='student-title'>{name.title}</h3>
        </div>
      ),
    },
    {
      title: 'Course ID',
      dataIndex: 'courseId',
      key: 'courseId',
    },
    {
      title: 'Course Name',
      dataIndex: 'courseName',
      key: 'courseName',
    },
    {
      title: 'Total Grade',
      dataIndex: 'totalGrade',
      key: 'totalGrade',
      render: (totalGrade) => <span>{totalGrade} point</span>,
    },
    {
      title: 'Ranking',
      dataIndex: 'ranking',
      key: 'ranking',
      render: (ranking) => <span>Ranking {ranking}</span>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => <span className='badge'>{category}</span>,
    },
  ];

  return (
    <AppTableContainer
      className='student-ranking-table'
      hoverColor
      data={studentRankings}
      columns={columns}
    />
  );
};

export default StudentRankingsTable;

StudentRankingsTable.defaultProps = {
  studentRankings: [],
};

StudentRankingsTable.propTypes = {
  studentRankings: PropTypes.array,
};
