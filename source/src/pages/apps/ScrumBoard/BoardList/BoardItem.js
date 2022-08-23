import React from 'react';
import PropTypes from 'prop-types';
import {BsCardList} from 'react-icons/bs';
import {MdEdit} from 'react-icons/md';
import AppCard from '../../../../@crema/core/AppCard';

const BoardItem = ({board, onEditButtonClick, onViewBoardDetail}) => {
  return (
    <AppCard
      className='scrum-board-card'
      key={board.id}
      onClick={() => onViewBoardDetail(board)}>
      <div className='scrum-board-list-icon'>
        <BsCardList />
        <MdEdit onClick={() => onEditButtonClick(board)} />
      </div>
      <p className='scrum-board-card-text'>{board.name}</p>
      <span onClick={(event) => event.stopPropagation()} />
    </AppCard>
  );
};

export default BoardItem;

BoardItem.propTypes = {
  board: PropTypes.object.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onViewBoardDetail: PropTypes.func,
};
