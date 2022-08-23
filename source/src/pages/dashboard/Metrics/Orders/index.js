import React, {useState} from 'react';
import OrdersGraph from './OrdersGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import AppSelect from '../../../../@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import './index.style.less';

const Orders = ({data}) => {
  const [graphData, setGraphData] = useState(data.graphData.dataTwo);
  const {messages} = useIntl();

  const handleWeekChange = (value) => {
    switch (value) {
      case messages['dashboard.thisWeek']:
        setGraphData(data.graphData.dataOne);
        break;
      case messages['dashboard.lastWeeks']:
        setGraphData(data.graphData.dataTwo);
        break;
      case messages['dashboard.lastMonth']:
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  return (
    <AppCard
      heightFull
      title={messages['common.orders']}
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
      className='orders-card'
      actions={[
        <div key={1} className='orders-footer'>
          <p>
            <IntlMessages id='common.revenue' />
            <span>{data.revenue}</span>
          </p>
          <p>
            <IntlMessages id='common.orders' />
            <span>{data.orders}</span>
          </p>
        </div>,
      ]}>
      <OrdersGraph data={graphData} />
    </AppCard>
  );
};

export default Orders;

Orders.defaultProps = {
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

Orders.propTypes = {
  data: PropTypes.object,
};
