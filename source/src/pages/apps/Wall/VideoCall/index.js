import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import {Avatar, Button} from 'antd';
import './index.style.less';
import {AiFillCheckCircle} from 'react-icons/ai';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const coverImg = '/assets/images/wall/v-card.jpg';

const VideoCall = ({data}) => {
  const {users, title} = data;

  return (
    <AppCard
      className='video-call-card'
      cover={<img src={coverImg} alt='V-card' />}>
      <div className='video-call-user-info'>
        <div className='video-call-user'>
          <Avatar src='/assets/images/avatar/A5.jpg' alt='User' />
          <span className='video-call-user-status'>
            <AiFillCheckCircle />
          </span>
        </div>
        <h3>
          <IntlMessages id='wall.ericBrickey' />
        </h3>
        <p>
          <IntlMessages id='wall.osloNorway' />
        </p>
      </div>
      <div className='video-call'>
        <h5>{title}</h5>
        <div className='video-call-avatar-view'>
          {users.slice(0, 4).map((user) => (
            <Avatar
              key={user.id}
              className='video-call-avatar'
              src={user.profilePic}
            />
          ))}
          {users.length > 4 ? (
            <span className='video-call-avatar-count'>+{users.length - 4}</span>
          ) : null}
        </div>
        <div className='video-call-btn-view'>
          <Button type='primary' className=''>
            Group Call
          </Button>
          <Button className='video-call-btn'>Video Call</Button>
        </div>
      </div>
    </AppCard>
  );
};

export default VideoCall;

VideoCall.propTypes = {
  data: PropTypes.object,
};
