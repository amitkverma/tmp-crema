import React from 'react';
import {useDispatch} from 'react-redux';
import {onUpdatePostStatus} from '../../../../../redux/actions/Wall';
import PropTypes from 'prop-types';
import {
  CommentOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import '../index.style.less';
import clsx from 'clsx';

const PostStats = ({post}) => {
  const dispatch = useDispatch();

  const toggleLikeStatus = () => {
    dispatch(onUpdatePostStatus(post.id, !post.liked));
  };

  return (
    <div className='post-stats'>
      <span
        className={clsx('post-stats-item', {active: post.liked})}
        onClick={toggleLikeStatus}>
        <LikeOutlined className='post-stats-item-icon' />
        <span className='post-stats-item-info'>{post.likes} likes</span>
      </span>
      {post.comments.length > 0 && (
        <span className='post-stats-item'>
          <CommentOutlined className='post-stats-item-icon' />
          <span className='post-stats-item-info'>
            {post.comments.length} Comments
          </span>
        </span>
      )}
      <span className='post-stats-item'>
        <ShareAltOutlined className='post-stats-item-icon' />
        <span className='post-stats-item-info'>{post.shares} Shares</span>
      </span>
    </div>
  );
};

export default PostStats;

PostStats.propTypes = {
  post: PropTypes.object.isRequired,
};
