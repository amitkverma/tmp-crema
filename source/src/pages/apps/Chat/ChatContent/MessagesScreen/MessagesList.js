import React from 'react';
import PropTypes from 'prop-types';
import SenderMessageItem from './SenderMessageItem';
import ReceiverMessageItem from './ReceiverMessageItem';
import AppList from '../../../../../@crema/core/AppList';
import './MessageItem.style.less';
import ListEmptyResult from '../../../../../@crema/core/AppList/ListEmptyResult';
import {AppAnimates} from '../../../../../shared/constants/AppEnums';

const MessagesList = ({
  userMessages,
  authUser,
  selectedUser,
  onClickEditMessage,
  deleteMessage,
}) => {
  return (
    <div className='chat-message-list'>
      <AppList
        animation={AppAnimates.SLIDEUPIN}
        data={userMessages.messageData}
        ListEmptyComponent={<ListEmptyResult title='test' />}
        renderItem={(item, index) => {
          if (item.sender === authUser.id) {
            return (
              <SenderMessageItem
                authUser={authUser}
                item={item}
                isPreviousSender={
                  index > 0 &&
                  item.sender === userMessages.messageData[index - 1].sender
                }
                isLast={
                  (index + 1 < userMessages.messageData.length &&
                    item.sender !==
                      userMessages.messageData[index + 1].sender) ||
                  index + 1 === userMessages.messageData.length
                }
                key={item.id}
                onClickEditMessage={onClickEditMessage}
                deleteMessage={deleteMessage}
              />
            );
          } else {
            return (
              <ReceiverMessageItem
                isPreviousSender={
                  index > 0 &&
                  item.sender === userMessages.messageData[index - 1].sender
                }
                isLast={
                  (index + 1 < userMessages.messageData.length &&
                    item.sender !==
                      userMessages.messageData[index + 1].sender) ||
                  index + 1 === userMessages.messageData.length
                }
                selectedUser={selectedUser}
                item={item}
                key={item.id}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default MessagesList;

MessagesList.defaultProps = {};

MessagesList.propTypes = {
  userMessages: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
  onClickEditMessage: PropTypes.func,
  deleteMessage: PropTypes.func,
};
