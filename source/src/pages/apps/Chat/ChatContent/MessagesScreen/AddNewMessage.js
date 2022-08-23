import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {PaperClipOutlined, SendOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import {MessageType} from '../../../../../@crema/services/db/apps/chat/connectionList';
import {Button, Input} from 'antd';
import {generateUniqueID} from '../../../../../@crema/utility/Utils';

const AddNewMessage = ({
  sendFileMessage,
  onSendMessage,
  currentMessage = '',
}) => {
  const [message, setMessage] = useState(currentMessage);
  const {getRootProps, getInputProps} = useDropzone({
    multiple: true,
    onDrop: (acceptedFiles) => {
      sendFileMessage({
        message: '',
        message_type: MessageType.MEDIA,
        media: acceptedFiles.map((file) => {
          return {
            id: generateUniqueID(),
            url: URL.createObjectURL(file),
            mime_type: file.type,
            file_name: file.name,
            file_size: file.size,
          };
        }),
      });
    },
  });

  useEffect(() => {
    setMessage(currentMessage);
  }, [currentMessage]);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClickSendMessage();
    }
  };

  const onClickSendMessage = () => {
    if (message) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const {messages} = useIntl();

  return (
    <div className='add-new-message'>
      <div className='add-new-message-action add-new-message-action-first'>
        {message === '' ? (
          <Button
            {...getRootProps({
              className: 'message-btn dropzone',
            })}>
            <input {...getInputProps()} />
            <PaperClipOutlined />
          </Button>
        ) : null}
      </div>
      <Input
        placeholder={messages['chatApp.sendMessagePlaceholder']}
        value={message}
        onChange={(event) => {
          if (event.target.value !== '\n') setMessage(event.target.value);
        }}
        onKeyPress={onKeyPress}
      />

      <div className='add-new-message-action'>
        <Button className='message-btn' onClick={onClickSendMessage}>
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
};

export default AddNewMessage;

AddNewMessage.defaultProps = {
  message: '',
};

AddNewMessage.propTypes = {
  sendFileMessage: PropTypes.func,
  onSendMessage: PropTypes.func,
  currentMessage: PropTypes.string,
};
