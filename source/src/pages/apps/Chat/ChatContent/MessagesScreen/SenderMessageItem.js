import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  EditOutlined,
  FileTextOutlined,
  MoreOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {MessageType} from '../../../../../@crema/services/db/apps/chat/connectionList';
import {getFileSize} from '../../../../../@crema/utility/Utils';
import {Avatar, Dropdown, Menu} from 'antd';
import './MessageItem.style.less';
import AppMediaViewer from '../../../../../@crema/core/AppMedialViewer';
import clsx from 'clsx';

const showMediaItems = 2;

const getMediaMessage = (item) => {
  if (item.mime_type.startsWith('image')) {
    return (
      <div className='media-img'>
        <img alt='' src={item.url} />
      </div>
    );
  } else if (item.mime_type.startsWith('video')) {
    return (
      <div className='media-video'>
        <video src={item.url} />
        <PlayCircleOutlined className='media-video-icon' />
      </div>
    );
  } else {
    return (
      <div className='media-attach'>
        <FileTextOutlined />
        <p>
          <span>{item.file_name}</span>
          <span>{getFileSize(item.file_size)}</span>
        </p>
      </div>
    );
  }
};

const getMessage = (item, setIndex) => {
  if (item.message_type === MessageType.TEXT) {
    return <p className='message-type-para'>{item.message}</p>;
  } else {
    return (
      <div className='chat-media-wrapper'>
        <div className='chat-media-row'>
          {item.media.slice(0, showMediaItems).map((data, index) => (
            <div
              key={'media-' + data.id}
              className='chat-media-col'
              onClick={() => setIndex(index)}>
              {getMediaMessage(data)}
            </div>
          ))}
          {item.media.length > showMediaItems ? (
            <div
              className='chat-media-col'
              onClick={() => setIndex(showMediaItems)}>
              <div className='media-counter'>
                +{item.media.length - showMediaItems}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
};
const SenderMessageItem = ({
  authUser,
  item,
  onClickEditMessage,
  isPreviousSender = false,
  deleteMessage,
  isLast,
}) => {
  const [index, setIndex] = useState(-1);
  const getUserAvatar = () => {
    const name = authUser.displayName;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (authUser.email) {
      return authUser.email.charAt(0).toUpperCase();
    }
  };

  const onClose = () => {
    setIndex(-1);
  };
  const menuSend = (
    <Menu>
      {item.message_type === MessageType.TEXT ? (
        <Menu.Item
          onClick={() => {
            onClickEditMessage(item);
          }}>
          <IntlMessages id='common.edit' />
        </Menu.Item>
      ) : null}
      <Menu.Item
        onClick={() => {
          deleteMessage(item.id);
        }}>
        <IntlMessages id='common.delete' />
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      className={clsx(
        'chat-message-list-item right',
        isPreviousSender ? 'hide-user-info' : 'first-chat-message',
        isLast ? 'last-chat-message' : '',
      )}>
      <div className='message-chat-view'>
        <div className='message-chat-item'>
          <span className='message-time'>{item.time}</span>
          <div className='message-chat'>
            {getMessage(item, setIndex)}

            {item.edited && (
              <span className='message-info-edit'>
                <EditOutlined />
              </span>
            )}
          </div>
        </div>
        <div className='message-chat-sender'>
          {authUser.photoURL ? (
            <Avatar
              size={34}
              className='message-chat-avatar'
              src={authUser.photoURL}
            />
          ) : (
            <Avatar className='message-chat-avatar'>{getUserAvatar()}</Avatar>
          )}
          <Dropdown overlay={menuSend} trigger={['click']}>
            <a className='message-more-dropdown-link'>
              <MoreOutlined />
            </a>
          </Dropdown>
        </div>
      </div>

      <AppMediaViewer index={index} medias={item.media} onClose={onClose} />
    </div>
  );
};

export default SenderMessageItem;

SenderMessageItem.defaultProps = {};

SenderMessageItem.propTypes = {
  authUser: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
  onClickEditMessage: PropTypes.func,
  deleteMessage: PropTypes.func,
};
