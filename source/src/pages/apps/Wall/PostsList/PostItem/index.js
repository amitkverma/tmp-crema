import React from 'react';
import AppCard from '../../../../../@crema/core/AppCard';
import Attachments from './Attachments';
import PostStats from './PostStats';
import AddComment from './AddComment';
import CommentsList from './CommentsList';
import PropTypes from 'prop-types';
import {Avatar, Button} from 'antd';
import {EllipsisOutlined} from '@ant-design/icons';
import '../index.style.less';
import {getTimeFromNow} from '../../../../../@crema/utility/helper/DateHelper';

const PostItem = ({post, wallData}) => {
  const {owner, message, date, attachments, comments} = post;
  const getTitle = () => (
    <div className='post-item-user'>
      <Avatar className='post-item-avatar' src={owner.profilePic} />
      <div className='post-item-user-info'>
        <h3>{owner.name}</h3>
        <p>{getTimeFromNow(date)}</p>
      </div>
    </div>
  );

  return (
    <AppCard
      className='post-item-card'
      title={getTitle()}
      extra={
        <Button className='post-item-extra-btn' onClick={null}>
          <EllipsisOutlined />
        </Button>
      }>
      {message ? <p className='post-item-para'>{message}</p> : null}
      <Attachments attachments={attachments} />
      <PostStats post={post} />
      <AddComment postId={post.id} wallData={wallData} />
      {comments.length > 0 && <CommentsList comments={comments} />}
    </AppCard>
  );
};

export default PostItem;

PostItem.propTypes = {
  post: PropTypes.object,
  wallData: PropTypes.object,
};
