import React from 'react';
import AppList from '../../../../../../@crema/core/AppList';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';
import '../../index.style.less';

const CommentsList = ({comments}) => {
  return (
    <div className='post-comment-list'>
      <h3 className='post-comment-list-title'>Comments</h3>
      <AppList
        data={comments}
        renderItem={(item, index) => <CommentItem key={index} item={item} />}
      />
    </div>
  );
};

export default CommentsList;

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};
