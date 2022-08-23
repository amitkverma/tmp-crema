import React from 'react';
import {useDropzone} from 'react-dropzone';
import {Button} from 'antd';
import './index.style.less';

const DialogProgrammatically = () => {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className='container'>
      <div
        className='dialog-dropzone'
        {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here</p>
        <Button type='primary' onClick={open}>
          Open File Dialog
        </Button>
      </div>
      <aside>
        <h6>Files</h6>
        <ul>{files}</ul>
      </aside>
    </div>
  );
};
export default DialogProgrammatically;
