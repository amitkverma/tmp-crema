import React from 'react';
import PropTypes from 'prop-types';
import WhatsHappenItem from './WhatsHappenItem';
import {useIntl} from 'react-intl';
import './index.style.less';
import AppCard from '../../../../@crema/core/AppCard';

const WhatsHappen = ({whatsHappen}) => {
  const {messages} = useIntl();

  return (
    <AppCard
      className='no-card-space-ltr-rtl whats-happen-card'
      title={messages['wall.whatsHappening']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}>
      <div>
        {whatsHappen.map((data) => (
          <WhatsHappenItem data={data} key={data.id} />
        ))}
      </div>
    </AppCard>
  );
};

export default WhatsHappen;

WhatsHappen.propTypes = {
  whatsHappen: PropTypes.array,
};
