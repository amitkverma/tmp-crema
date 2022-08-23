import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import AppMenu from '../../../../@crema/core/AppMenu';
import AppointmentCell from './AppointmentCell';
import PropTypes from 'prop-types';
import {List} from 'antd';
import './index.style.less';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const UpcomingAppointments = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='up-coming-appoint-card no-card-space-ltr-rtl'
      title={messages['healthCare.upcomingAppointments']}
      extra={<AppMenu />}>
      <AppScrollbar className='up-coming-appoint-scrollbar'>
        <List
          dataSource={data}
          renderItem={(appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default UpcomingAppointments;

UpcomingAppointments.defaultProps = {
  data: [],
};

UpcomingAppointments.propTypes = {
  data: PropTypes.array,
};
