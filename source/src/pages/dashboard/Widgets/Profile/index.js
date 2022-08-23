import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Avatar, Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import './index.style.less';

const Profile = (props) => {
  const {data} = props;

  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='wid-profile-card'
      title={messages['common.wall']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }>
      <div className='wid-profile-info'>
        <Avatar className='wid-profile-avatar' src={data.image} />
        <h3>{data.name}</h3>
      </div>

      <div className='wid-profile-action'>
        <div className='wid-profile-action-item'>
          <h2>{data.photos}</h2>
          <p className='text-truncate text-center'>
            <IntlMessages id='dashboard.photos' />
          </p>
        </div>
        <div className='wid-profile-action-item'>
          <h2>{data.followers}</h2>
          <p className='text-truncate text-center'>
            <IntlMessages id='dashboard.followers' />
          </p>
        </div>
        <div className='wid-profile-action-item'>
          <h2>{data.following}</h2>
          <p className='text-truncate text-center'>
            <IntlMessages id='dashboard.following' />
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default Profile;

Profile.propTypes = {
  data: PropTypes.object.isRequired,
};
