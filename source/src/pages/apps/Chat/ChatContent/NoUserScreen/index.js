import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {MessageOutlined} from '@ant-design/icons';

const NoUserScreen = () => {
  return (
    <div className='no-user-screen'>
      <MessageOutlined className='message-icon' />
      <p className='mb-0'>
        <IntlMessages id='chatApp.noUser' />
      </p>
    </div>
  );
};

export default NoUserScreen;
