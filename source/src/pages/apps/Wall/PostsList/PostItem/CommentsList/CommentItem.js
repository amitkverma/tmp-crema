import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import '../../index.style.less';
import clsx from 'clsx';

const CommentItem = ({item}) => {
  const {author, comment, liked} = item;
  const [isLiked, setIsLiked] = useState(liked);

  const toggleLikeStatus = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='post-comment-item'>
      <Avatar className='post-item-avatar' src={author.profilePic} />
      <div className='post-comment-item-content'>
        <div className='post-comment-item-content-area'>
          <p className='mb-0'>{comment}</p>
        </div>
        <div className='post-comment-item-action'>
          <span
            className={clsx('pointer', {active: isLiked})}
            onClick={toggleLikeStatus}>
            Like
          </span>
          <span className='pointer'>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

CommentItem.propTypes = {
  item: PropTypes.object.isRequired,
};
