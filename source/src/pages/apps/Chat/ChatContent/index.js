import React from 'react';
import {useSelector} from 'react-redux';
import NoUserScreen from './NoUserScreen';
import MessagesScreen from './MessagesScreen';
import './index.style.less';

const ChatContent = () => {
  const {selectedUser} = useSelector(({chatApp}) => chatApp);
  const {loading} = useSelector(({common}) => common);

  return (
    <>
      {selectedUser ? (
        <div className='chat-content-screen'>
          <MessagesScreen selectedUser={selectedUser} loading={loading} />
        </div>
      ) : (
        <div className='chat-no-user-screen'>
          <NoUserScreen />
        </div>
      )}
    </>
  );
};

export default ChatContent;
