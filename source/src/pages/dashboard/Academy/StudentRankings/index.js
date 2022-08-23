import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import StudentRankingsTable from './StudentRankingsTable';
import AppMenu from '../../../../@crema/core/AppMenu';

const StudentRankings = ({studentRankings}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['academy.studentRankings']}
      extra={<AppMenu />}>
      <StudentRankingsTable studentRankings={studentRankings} />
    </AppCard>
  );
};

export default StudentRankings;

StudentRankings.propTypes = {
  studentRankings: PropTypes.array,
};
