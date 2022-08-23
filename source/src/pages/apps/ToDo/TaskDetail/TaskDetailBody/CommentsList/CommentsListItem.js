import React from 'react';
import {Avatar} from 'antd';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CommentsListItem = ({item, isPreviousSender, isLast}) => {
  return (
    <div
      className={clsx(
        'todo-comment-item',
        isPreviousSender ? 'hideUserInfo' : 'first-chat-message',
        isLast ? 'last-chat-message' : '',
      )}>
      <div className='todo-comment-view'>
        <div className='todo-comment-user'>
          {item.image ? (
            <Avatar src={item.image} className='todo-avatar-36' />
          ) : (
            <Avatar className='todo-avatar-36 todo-avatar-name'>
              {item.name[0]}
            </Avatar>
          )}
          <span className='todo-name'>{item.name}</span>
        </div>
        <div className='todo-comment-msg-view'>
          <span className='todo-comment-time'>{item.date}</span>
          <div className='todo-comment-msg'>
            <p>{item.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsListItem;

CommentsListItem.propTypes = {
  item: PropTypes.object,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
};
