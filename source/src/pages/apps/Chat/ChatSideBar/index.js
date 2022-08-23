import React, {useState} from 'react';
import UserInfo from './UserInfo';
import UserTabs from './UserTabs';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useIntl} from 'react-intl';
import {Input} from 'antd';
import './index.style.less';
import {useAuthUser} from '../../../../@crema/utility/AuthHooks';

const ChatSideBar = () => {
  const [keywords, setKeywords] = useState('');
  const {user} = useAuthUser();

  const {connectionList} = useSelector(({chatApp}) => chatApp);
  const {loading} = useSelector(({common}) => common);

  const {Search} = Input;

  const getConnectionList = () => {
    if (keywords !== '') {
      return connectionList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    return connectionList;
  };

  const getChatList = () => {
    let chatsList = connectionList.filter((item) => item.lastMessage);
    if (keywords !== '') {
      chatsList = chatsList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    chatsList.sort((a, b) => {
      let momentA = moment(a.lastMessage.time).format('X');
      let momentB = moment(b.lastMessage.time).format('X');
      return momentB - momentA;
    });
    return chatsList;
  };

  const connectionListData = getConnectionList();

  const chatListData = getChatList();

  const {messages} = useIntl();

  return (
    <div className='chat-sidebar'>
      <div className='chat-sidebar-user-view'>
        <UserInfo user={user} showStatusActive={true} />
      </div>

      <div className='chat-sidebar-search-view'>
        <Search
          className='chat-sidebar-search'
          placeholder={messages['common.searchHere']}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </div>

      <UserTabs
        connectionListData={connectionListData}
        chatListData={chatListData}
        loading={loading}
      />
    </div>
  );
};

export default ChatSideBar;
