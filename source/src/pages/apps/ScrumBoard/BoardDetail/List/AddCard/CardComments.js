import React, {useState} from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Avatar, Button, Input} from 'antd';
import AppScrollbar from '../../../../../../@crema/core/AppScrollbar';
import {FiSend} from 'react-icons/fi';
import clsx from 'clsx';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';

const CardComments = (props) => {
  const {comments, onAddNewComment} = props;
  const [comment, setComment] = useState('');

  const onAddComment = () => {
    onAddNewComment(comment);
    setComment('');
  };

  const {messages} = useIntl();

  const {TextArea} = Input;

  const getCommentCell = (item, index, isPreviousSender) => {
    return (
      <div
        className={clsx('scrum-board-card-comment-item', {
          'scrum-board-card-comment-item-previous': isPreviousSender,
        })}
        key={index}>
        {item.sender.image ? (
          <Avatar
            src={item.sender.image}
            className='scrum-board-card-comment-item-user-avatar'
          />
        ) : (
          <Avatar className='scrum-board-card-comment-item-user-avatar'>
            {item.sender.name.charAt(0).toUpperCase()}
          </Avatar>
        )}
        <div className='scrum-board-card-comment-item-user-content'>
          <span className='scrum-board-card-comment-item-user-date'>
            {item.date}
          </span>
          <div className='scrum-board-card-comment-area'>
            <p>{item.comment}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='scrum-board-card-comment-view'>
      <h4 className='scrum-board-card-comment-title'>
        <IntlMessages id='common.comments' />
      </h4>
      <AppScrollbar className='scrum-board-card-comment-scroll'>
        {comments && comments.length > 0 ? (
          <div className='scrum-board-card-comment'>
            {comments.map((item, index) =>
              getCommentCell(
                item,
                index,
                index > 0 && comments[index - 1].sender.id === item.sender.id,
              ),
            )}
          </div>
        ) : null}
      </AppScrollbar>

      <div className='scrum-board-card-comment-footer'>
        <TextArea
          autoSize={{minRows: 1, maxRows: 2}}
          // onKeyDown={onAddComment}
          value={comment}
          placeholder={messages['common.pressEnter']}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          shape='circle'
          type='primary'
          disabled={!comment}
          onClick={onAddComment}>
          <FiSend />
        </Button>
      </div>
    </div>
  );
};

export default CardComments;

CardComments.defaultProps = {
  comments: [],
};

CardComments.propTypes = {
  comments: PropTypes.array,
  onAddNewComment: PropTypes.func,
};
