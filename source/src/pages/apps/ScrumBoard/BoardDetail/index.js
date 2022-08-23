import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppsContainer from '../../../../@crema/core/AppsContainer';
import BoardDetailView from './BoardDetailView';
import {useNavigate, useLocation} from 'react-router-dom';
import {
  onGetBoardDetail,
  onNullifyBoardDetail,
} from '../../../../redux/actions/ScrumboardApp';
import './index.style.less';

const BoardDetail = () => {
  const navigate = useNavigate();
  const boardDetail = useSelector(
    ({scrumboardApp}) => scrumboardApp.boardDetail,
  );
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    const path = pathname.split('/');
    const id = path[path.length - 1];
    dispatch(onGetBoardDetail(id));
    return () => {
      dispatch(onNullifyBoardDetail());
    };
  }, [dispatch, pathname]);

  const onGoToBoardList = () => {
    navigate(-1);
  };

  if (!boardDetail) {
    return null;
  }

  return (
    <AppsContainer
      fullView
      noContentAnimation
      title={
        <>
          <span className='scrum-board-detail-title' onClick={onGoToBoardList}>
            Scrum Board
          </span>
          &gt; {boardDetail.name}
        </>
      }>
      <BoardDetailView boardDetail={boardDetail} />
    </AppsContainer>
  );
};

export default BoardDetail;
