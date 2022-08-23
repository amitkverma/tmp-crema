import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import './index.style.less';
import {Avatar, Button} from 'antd';
import {LikeOutlined} from '@ant-design/icons';

const SuggestTeam = ({data}) => {
  const {icon, title, subTitle, mediaImg} = data;
  const {messages} = useIntl();

  return (
    <AppCard
      className='suggest-team-card'
      title={messages['wall.suggestTeams']}
      extra={<a href='#/'>{messages['common.viewAll']}</a>}
      actions={[
        <Button key={1} className='suggest-team-btn' icon={<LikeOutlined />}>
          <IntlMessages id='wall.likeTeam' />
        </Button>,
      ]}>
      <div className='suggest-team-user'>
        <Avatar src={icon} alt='Face Book' />
        <div className='suggest-team-user-content'>
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className='suggest-team-thumb'>
        <img src={mediaImg} alt='F man' />
      </div>
    </AppCard>
  );
};

export default SuggestTeam;

SuggestTeam.propTypes = {
  data: PropTypes.object,
};
