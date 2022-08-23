import React, {useState} from 'react';
import ChatWindow from './ChatWindow';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';

const ConnectionListItem = (props) => {
  const {connection} = props;
  const [isOpenChat, setOpenChat] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenChat(true)}
        key={connection.id}
        className='mail-connection-list-item'>
        <Avatar
          className='mail-connection-avatar'
          alt='Remy Sharp'
          src={connection.image}
        />
        <div className='mail-connection-content'>
          <p className='mail-connection-title'>{connection.name}</p>
          <p>{connection.status}</p>
        </div>
      </div>

      {isOpenChat ? (
        <ChatWindow
          setOpenChat={setOpenChat}
          isOpenChat={isOpenChat}
          connection={connection}
        />
      ) : null}
    </>
  );
};

export default ConnectionListItem;

ConnectionListItem.defaultProps = {
  connection: null,
};

ConnectionListItem.propTypes = {
  connection: PropTypes.object,
};
