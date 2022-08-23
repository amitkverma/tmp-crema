import React from 'react';
import EarningGraph from './EarningGraph';
import PropTypes from 'prop-types';
import Categories from './Categories';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import './index.style.less';

const EarningInMonth = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='earning-month-card'
      title={messages['dashboard.earningInMonth']}
      actions={[<Categories key={1} data={data} />]}
      heightFull>
      <div className='earning-month-graph-view'>
        <EarningGraph data={data} />
      </div>
    </AppCard>
  );
};

export default EarningInMonth;

EarningInMonth.defaultProps = {
  data: [],
};

EarningInMonth.propTypes = {
  data: PropTypes.array,
};
