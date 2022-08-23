import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  onAddNewBoard,
  onEditBoardDetail,
  onGetBoardList,
} from '../../../../redux/actions';
import {useNavigate} from 'react-router-dom';
import AddNewBoard from './AddNewBoard';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import BoardItem from './BoardItem';
import AddBoardButton from './AddBoardButton';
import {AppInfoView} from '../../../../@crema';
import './index.style.less';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';

const BoardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardList = useSelector(({scrumboardApp}) => scrumboardApp.boardList);

  const [selectedBoard, setSelectedBoard] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(onGetBoardList());
  }, [dispatch]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const onEditButtonClick = (board) => {
    setSelectedBoard(board);
    setIsModalVisible(true);
  };

  const onAddBoard = (name) => {
    if (selectedBoard) {
      const board = {...selectedBoard, name};
      dispatch(onEditBoardDetail(board));
    } else {
      dispatch(onAddNewBoard({name}));
    }
  };

  const onViewBoardDetail = (board) => {
    navigate(`/apps/scrum-board/${board.id}`);
  };

  const showModal = () => {
    setSelectedBoard(null);
    setIsModalVisible(true);
  };

  return (
    <>
      <div className='scrum-board-wrap'>
        <div className='scrum-board-header'>
          <h2>
            <IntlMessages id='scrumboard.scrumboardApp' />
          </h2>
        </div>
        <AppRowContainer className='scrum-board-container'>
          {boardList && boardList.length > 0
            ? boardList.map((board) => {
                return (
                  <Col xs={24} sm={12} md={8} lg={6} key={board.id}>
                    <BoardItem
                      board={board}
                      onEditButtonClick={onEditButtonClick}
                      onViewBoardDetail={onViewBoardDetail}
                    />
                  </Col>
                );
              })
            : null}
          <Col xs={24} sm={12} md={8} lg={6}>
            <AddBoardButton onAddButtonClick={showModal} />
          </Col>
        </AppRowContainer>
      </div>

      {isModalVisible ? (
        <AddNewBoard
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          onAddBoard={onAddBoard}
          handleOk={handleOk}
          selectedBoard={selectedBoard}
        />
      ) : null}
      <AppInfoView />
    </>
  );
};

export default BoardList;
