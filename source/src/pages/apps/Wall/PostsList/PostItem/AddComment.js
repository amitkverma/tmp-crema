import React, {useState} from 'react';
import {onAddNewComment} from '../../../../../redux/actions/Wall';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Avatar, Input} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import '../index.style.less';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {MdOutlineAttachFile} from 'react-icons/md';

const AddComment = ({postId, wallData}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const submitComment = (event) => {
    if (event.key === 'Enter') {
      const newComment = {
        author: {
          name: wallData.name,
          profilePic: wallData.profilePic,
          id: wallData.id,
        },
        comment,
      };
      dispatch(onAddNewComment(postId, newComment));
      setComment('');
    }
  };

  return (
    <div className='add-comment'>
      <Avatar className='post-item-avatar' src={wallData.profilePic} />
      <div className='add-comment-user'>
        <div className='add-comment-user-info'>
          <Input
            className='add-comment-input'
            placeholder='Write a comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={submitComment}
            suffix={
              <div className='add-suffix-action'>
                <AppIconButton icon={<SmileOutlined />} />
                <AppIconButton icon={<MdOutlineAttachFile />} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AddComment;

AddComment.propTypes = {
  postId: PropTypes.number,
  wallData: PropTypes.object,
};
