import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SimpleBarReact from 'simplebar-react';
import {
  getConnectionMessages,
  onClearChatHistory,
  onDeleteConversation,
  onDeleteMessage,
  onEditMessage,
  onSendMessage,
} from '../../../../../redux/actions/ChatApp';
import AddNewMessage from './AddNewMessage';
import MessagesList from './MessagesList';
import moment from 'moment';
import Header from './Header';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import AppsHeader from '../../../../../@crema/core/AppsContainer/AppsHeader';
import AppsFooter from '../../../../../@crema/core/AppsContainer/AppsFooter';
import {MessageType} from '../../../../../@crema/services/db/apps/chat/connectionList';
import {useAuthUser} from '../../../../../@crema/utility/AuthHooks';

const MessagesScreen = ({selectedUser, loading}) => {
  const [message, setMessage] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const {userMessages} = useSelector(({chatApp}) => chatApp);

  const dispatch = useDispatch();
  const {user} = useAuthUser();

  let _scrollBarRef = useRef(null);
  useEffect(() => {
    dispatch(getConnectionMessages(selectedUser.channelId));
  }, [dispatch, selectedUser]);

  useEffect(() => {
    if (userMessages?.messageData?.length > 0) {
      if (_scrollBarRef?.current) {
        const scrollEl = _scrollBarRef.current.getScrollElement();
        scrollEl.scrollTop = scrollEl.scrollHeight;
      }
    }
  }, [userMessages, _scrollBarRef]);

  const sendFileMessage = (fileMessage) => {
    const data = {
      ...fileMessage,
      sender: user.id,
      time: moment().format('llll'),
    };
    dispatch(onSendMessage(selectedUser.channelId, data));
  };

  const onSend = (message) => {
    const data = {
      ...selectedMessage,
      message,
      message_type: MessageType.TEXT,
      sender: user.id,
      time: moment().format('llll'),
    };

    if (isEdit) {
      data.edited = true;
      dispatch(onEditMessage(selectedUser.channelId, data));
      setMessage('');
      setIsEdit(false);
      setSelectedMessage(null);
    } else {
      dispatch(onSendMessage(selectedUser.channelId, data));
      setMessage('');
    }
  };

  const onChangeStarred = (checked) => {
    setIsChecked(checked);
  };

  const onClickEditMessage = (data) => {
    if (data.message_type === MessageType.TEXT) {
      setIsEdit(true);
      setMessage(data.message);
      setSelectedMessage(data);
    }
  };

  const deleteMessage = (messageId) => {
    dispatch(onDeleteMessage(selectedUser.channelId, messageId));
  };

  const deleteConversation = () => {
    dispatch(onDeleteConversation(selectedUser.channelId));
  };
  const clearChatHistory = () => {
    dispatch(onClearChatHistory(selectedUser.channelId));
  };

  return (
    <div className='message-screen'>
      <AppsHeader>
        <Header
          isChecked={isChecked}
          onChangeStarred={onChangeStarred}
          selectedUser={selectedUser}
          deleteConversation={deleteConversation}
          clearChatHistory={clearChatHistory}
        />
      </AppsHeader>

      {userMessages && user ? (
        <SimpleBarReact
          ref={(ref) => {
            _scrollBarRef = ref;
          }}
          className='message-screen-scrollbar'>
          <MessagesList
            userMessages={userMessages}
            authUser={user}
            selectedUser={selectedUser}
            onClickEditMessage={onClickEditMessage}
            deleteMessage={deleteMessage}
            loading={loading}
          />
        </SimpleBarReact>
      ) : (
        <div className='scroll-chat-no-main'>
          <span className='noMessage'>
            <IntlMessages id='chatApp.sayHi' /> {selectedUser.name}
          </span>
        </div>
      )}

      <AppsFooter className='message-apps-footer'>
        <AddNewMessage
          currentMessage={message}
          sendFileMessage={sendFileMessage}
          onSendMessage={onSend}
        />
      </AppsFooter>
    </div>
  );
};

export default MessagesScreen;

MessagesScreen.defaultProps = {};

MessagesScreen.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  loading: PropTypes.any,
};
