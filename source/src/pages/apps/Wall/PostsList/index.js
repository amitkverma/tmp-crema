import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetPostsList} from '../../../../redux/actions';
import AppList from '../../../../@crema/core/AppList';
import PostItem from './PostItem';
import './index.style.less';

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetPostsList());
  }, [dispatch]);

  const {postList, wallData} = useSelector(({wall}) => wall);

  return (
    <AppList
      className='post-list'
      data={postList}
      renderItem={(post, index) => (
        <PostItem key={index} post={post} wallData={wallData} />
      )}
    />
  );
};

export default PostsList;
