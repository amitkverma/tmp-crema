import React, {useState} from 'react';
import VisitsGraph from './VisitsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import AppSelect from '../../../../@crema/core/AppSelect';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const Visits = ({data}) => {
  const [graphData, setGraphData] = useState(data.graphData.dataOne);

  const handleWeekChange = (value) => {
    switch (value) {
      case 'This Week':
        setGraphData(data.graphData.dataTwo);
        break;
      case 'Last Weeks':
        setGraphData(data.graphData.dataOne);
        break;
      case 'Last Month':
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  const {messages} = useIntl();

  return (
    <AppCard
      className='visits-card'
      title={messages['dashboard.visits']}
      extra={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleWeekChange}
        />
      }
      heightFull
      actions={[
        <div key={1} className='visits-footer'>
          <p>
            <IntlMessages id='common.new' />
            <span>{data.new}</span>
          </p>
          <p>
            <IntlMessages id='common.returning' />
            <span>{data.returning}</span>
          </p>
        </div>,
      ]}>
      <VisitsGraph data={graphData} />
    </AppCard>
  );
};

export default Visits;

Visits.defaultProps = {
  data: {
    new: 0,
    returning: 0,
    graphData: {
      dataOne: [],
      dataTwo: [],
      dataThree: [],
    },
  },
};

Visits.propTypes = {
  data: PropTypes.object,
};
