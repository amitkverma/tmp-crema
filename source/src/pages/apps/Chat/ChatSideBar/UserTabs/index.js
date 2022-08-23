import React from 'react';
import ConnectionList from './ConnectionList';
import ChatList from './ChatList';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {Tabs} from 'antd';
import {BsChatSquareText} from 'react-icons/bs';
import {BiUserPin} from 'react-icons/bi';

const tabs = [
  {id: 333, name: <IntlMessages id='dashboard.messages' />},
  {id: 323, name: <IntlMessages id='chatApp.contacts' />},
];

const UserTabs = ({connectionListData, chatListData, loading}) => {
  const {TabPane} = Tabs;

  return (
    <>
      <Tabs className='chat-sidebar-tabs' defaultActiveKey='1'>
        <TabPane
          tab={
            <span className='chat-tab-item'>
              <BsChatSquareText />
              {tabs[0].name}
            </span>
          }
          key='1'>
          <ChatList chatListData={chatListData} loading={loading} />
        </TabPane>
        <TabPane
          tab={
            <span className='chat-tab-item'>
              <BiUserPin />
              {tabs[1].name}
            </span>
          }
          key='2'>
          <ConnectionList
            connectionListData={connectionListData}
            loading={loading}
          />
        </TabPane>
      </Tabs>
    </>
  );
};

export default UserTabs;

UserTabs.defaultProps = {
  connectionListData: [],
  chatListData: [],
};

UserTabs.propTypes = {
  connectionListData: PropTypes.array,
  chatListData: PropTypes.array,
  loading: PropTypes.bool,
};
