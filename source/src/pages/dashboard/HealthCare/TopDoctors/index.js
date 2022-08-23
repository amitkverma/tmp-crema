import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import AppMenu from '../../../../@crema/core/AppMenu';
import DoctorCell from './DoctorCell';
import PropTypes from 'prop-types';
import './index.style.less';
import {List} from 'antd';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const TopDoctors = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='no-card-space-ltr-rtl'
      title={messages['healthCare.topDoctors']}
      extra={<AppMenu />}>
      <AppScrollbar className='top-dr-scrollbar'>
        <List
          dataSource={data}
          renderItem={(doctor) => (
            <DoctorCell key={doctor.id} doctor={doctor} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TopDoctors;

TopDoctors.defaultProps = {
  data: [],
};

TopDoctors.propTypes = {
  data: PropTypes.array,
};
