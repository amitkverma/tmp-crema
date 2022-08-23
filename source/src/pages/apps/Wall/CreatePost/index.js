import React, {useState} from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {useDispatch, useSelector} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import AppList from '../../../../@crema/core/AppList';
import {onCreateNewPost} from '../../../../redux/actions/Wall';
import {useIntl} from 'react-intl';
import {Avatar, Input} from 'antd';
import {
  PictureOutlined,
  SendOutlined,
  SmileOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './index.style.less';
import AppIconButton from '../../../../@crema/core/AppIconButton';

const CreatePost = () => {
  const dispatch = useDispatch();

  const {wallData} = useSelector(({wall}) => wall);
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*, .pdf',
    multiple: true,
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) => {
        return {
          id: Math.floor(Math.random() * 10000),
          path: file.path,
          metaData: {type: file.type, size: file.size},
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  const onAddAttachments = (files) => {
    setAttachments([...attachments, ...files]);
  };

  const handlePostSubmit = () => {
    const post = {
      message,
      attachments,
      owner: {
        name: wallData.name,
        profilePic: wallData.profilePic,
        id: wallData.id,
      },
    };

    dispatch(onCreateNewPost(post));
    setAttachments([]);
    setMessage('');
  };

  const {messages} = useIntl();

  return (
    <AppCard className='create-post-card' title={messages['wall.createPost']}>
      <div className='create-post-main'>
        <Avatar size={40} src={wallData.profilePic} alt={wallData.name} />
        <div className='create-post-main-content'>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='create-post-input'
            placeholder="What's in your mind?"
            suffix={
              <div className='create-post-action'>
                <span {...getRootProps()} className='create-post-action-btn'>
                  <input {...getInputProps()} />
                  <PictureOutlined />
                </span>
                <AppIconButton icon={<VideoCameraOutlined />} />
                <AppIconButton icon={<SmileOutlined />} />
                <AppIconButton icon={<UserOutlined />} />
                <AppIconButton
                  disabled={!message.trim() && attachments.length === 0}
                  onClick={handlePostSubmit}
                  icon={<SendOutlined />}
                />
              </div>
            }
          />
        </div>
      </div>
      {attachments ? (
        <AppList
          className='create-post-img-list'
          data={attachments}
          renderItem={(item, index) => (
            <div className='create-post-img-item' key={index}>
              <img src={item.preview} alt='upload' />
            </div>
          )}
        />
      ) : null}
    </AppCard>
  );
};

export default CreatePost;
