import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Members from './Members';
import Labels from './Labels';
import './index.style.less';
import {IoMdAttach} from 'react-icons/io';
import {MdChatBubbleOutline} from 'react-icons/md';
import AppCard from '../../../../../../@crema/core/AppCard';

const BoardCard = ({
  title,
  attachments = [],
  label = [],
  members,
  date,
  comments,
  onClick,
}) => {
  return (
    <AppCard
      className='scrum-board-card-detail'
      onClick={(e) => {
        console.log('clicked');
        onClick(e);
      }}>
      <div className='scrum-board-card-detail-header'>
        <h3 className='scrum-board-card-detail-title'>{title}</h3>
        {attachments && attachments.length > 0 ? (
          <div className='scrum-board-card-detail-header-action'>
            <span>{attachments.length}</span>
            <IoMdAttach className='scrum-board-attach-icon' />
          </div>
        ) : null}
      </div>
      {label.length > 0 ? <Labels labels={label} /> : null}

      <div className='scrum-board-card-detail-user'>
        {members.length > 0 ? <Members members={members} /> : null}

        <span className='scrum-board-card-detail-date'>
          {date ? moment(date).format('ll').split(',')[0] : null}
        </span>
        {comments && comments.length > 0 ? (
          <div className='scrum-board-card-detail-comment'>
            <span>{comments.length}</span>
            <MdChatBubbleOutline />
          </div>
        ) : null}
      </div>
    </AppCard>
  );
};

export default BoardCard;

BoardCard.defaultProps = {
  list: null,
};

BoardCard.propTypes = {
  title: PropTypes.string,
  attachments: PropTypes.array,
  label: PropTypes.array,
  members: PropTypes.array,
  date: PropTypes.string,
  comments: PropTypes.array,
  onClick: PropTypes.func,
};
