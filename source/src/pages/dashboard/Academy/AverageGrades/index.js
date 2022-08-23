import React from 'react';
import AppSelect from '../../../../@crema/core/AppSelect';
import AppCard from '../../../../@crema/core/AppCard';
import GradeGraph from './GradeGraph';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.style.less';

const AverageGrades = ({grades}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='average-grades-card'
      title={messages['academy.averageGrade']}
      extra={
        <div className='ant-row ant-row-middle'>
          <AppSelect
            menus={[2020, 2021, 2018]}
            defaultValue={2020}
            onChange={() => {}}
          />
          <AppSelect
            menus={['All Months', 'Jan', 'Feb']}
            defaultValue={'All Months'}
            onChange={() => {}}
          />
        </div>
      }>
      <div className='average-grades-graph-view'>
        <GradeGraph grades={grades} />
      </div>
    </AppCard>
  );
};

export default AverageGrades;

AverageGrades.propTypes = {
  grades: PropTypes.array,
};
