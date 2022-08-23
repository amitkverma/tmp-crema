import {Modal, Button} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';

function destroyAll() {
  Modal.destroyAll();
}

const {confirm} = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
}

import React from 'react';

const DestroyConfirmationModal = () => {
  return <Button onClick={showConfirm}>Confirm</Button>;
};

export default DestroyConfirmationModal;
