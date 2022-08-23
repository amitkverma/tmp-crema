import React from 'react';
import ChatItem from './ChatItem';
import PropTypes from 'prop-types';
import AppList from '../../../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../../../@crema/core/AppList/ListEmptyResult';
import {useIntl} from 'react-intl';
import ChatListSkeleton from '../../../../../../@crema/core/AppSkeleton/ChatListSkeleton';
import {useSelector} from 'react-redux';
import AppScrollbar from '../../../../../../@crema/core/AppScrollbar';

const ChatList = ({chatListData, loading}) => {
  const {messages} = useIntl();
  const {selectedUser} = useSelector(({chatApp}) => chatApp);
  return (
    <AppScrollbar className='chat-sidebar-scrollbar'>
      <h3 className='chat-sidebar-title'>Connections</h3>
      <AppList
        data={chatListData}
        ListEmptyComponent={
          <ListEmptyResult
            content={messages['chatApp.noUserFound']}
            loading={loading}
            placeholder={<ChatListSkeleton />}
          />
        }
        renderItem={(item) => (
          <ChatItem key={item.id} item={item} selectedUser={selectedUser} />
        )}
      />
    </AppScrollbar>
  );
};

export default ChatList;

ChatList.propTypes = {
  chatListData: PropTypes.array,
  loading: PropTypes.bool,
};
