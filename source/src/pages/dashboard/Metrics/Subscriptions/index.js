import React, {useState} from 'react';
import SubscriptionGraph from './SubscriptionGraph';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import AppSelect from '../../../../@crema/core/AppSelect';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const Subscriptions = ({data}) => {
  const [graphData, setGraphData] = useState(data.dataOne);

  const handleYearChange = (value) => {
    switch (value) {
      case 2017:
        setGraphData(data.dataTwo);
        break;
      case 2018:
        setGraphData(data.dataThree);
        break;
      case 2021:
        setGraphData(data.dataOne);
        break;
      default:
        setGraphData(data.dataOne);
    }
  };

  const handleMonthChange = (value) => {
    switch (value) {
      case 'June':
        setGraphData(data.dataTwo);
        break;
      case 'July':
        setGraphData(data.dataThree);
        break;
      case 'August':
        setGraphData(data.dataOne);
        break;
      default:
        setGraphData(data.dataThree);
    }
  };

  const {messages} = useIntl();

  return (
    <AppCard
      heightFull
      title={messages['dashboard.subscriptions']}
      extra={
        <div className='subscriptions-extra'>
          <AppSelect
            menus={[2021, 2018, 2017]}
            defaultValue={2021}
            onChange={handleYearChange}
          />
          <AppSelect
            menus={[
              messages['common.june'],
              messages['common.july'],
              messages['common.august'],
            ]}
            defaultValue={messages['common.june']}
            onChange={handleMonthChange}
          />
        </div>
      }>
      <SubscriptionGraph data={graphData} />
    </AppCard>
  );
};

export default Subscriptions;

Subscriptions.defaultProps = {
  data: {
    dataOne: [],
    dataTwo: [],
    dataThree: [],
  },
};

Subscriptions.propTypes = {
  data: PropTypes.object,
};
