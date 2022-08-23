import React from 'react';
import SocialVisitorsGraph from './SocialVisitorsGraph';
import PropTypes from 'prop-types';
import Categories from './Categories';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import './index.style.less';

const SocialVisitors = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='social-visitor-card'
      heightFull
      title={messages['dashboard.socialVisitors']}
      extra={<a>{messages['common.viewAll']}</a>}>
      <SocialVisitorsGraph data={data} />

      <Categories data={data} />
    </AppCard>
  );
};

export default SocialVisitors;

SocialVisitors.defaultProps = {
  data: [],
};

SocialVisitors.propTypes = {
  data: PropTypes.array,
};
