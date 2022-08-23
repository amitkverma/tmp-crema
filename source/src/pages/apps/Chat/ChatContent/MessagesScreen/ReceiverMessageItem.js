import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  EditOutlined,
  FileTextOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import {MessageType} from '../../../../../@crema/services/db/apps/chat/connectionList';
import {getFileSize} from '../../../../../@crema/utility/Utils';
import {Avatar} from 'antd';
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

const ReceiverMessageItem = ({
  selectedUser,
  isPreviousSender = false,
  isLast,
  item,
}) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  return (
    <div
      className={clsx(
        'chat-message-list-item left',
        isPreviousSender ? 'hide-user-info' : 'first-chat-message',
        isLast ? 'last-chat-message' : '',
      )}>
      <div className='message-chat-view'>
        {isPreviousSender ? null : selectedUser.image ? (
          <Avatar
            size={34}
            className='message-chat-avatar'
            src={selectedUser.image}
          />
        ) : (
          <Avatar className='message-chat-avatar'>
            {selectedUser.name.charAt(0).toUpperCase()}
          </Avatar>
        )}

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
      </div>
      <AppMediaViewer index={index} medias={item.media} onClose={onClose} />
    </div>
  );
};

export default ReceiverMessageItem;

ReceiverMessageItem.defaultProps = {};

ReceiverMessageItem.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
};
