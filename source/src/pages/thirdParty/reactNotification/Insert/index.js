import React from 'react';
import {store} from 'react-notifications-component';
import {Button} from 'antd';

import notification from '../helpers/notification';
import {getMessage, getTitle, getType} from '../helpers/randomize';

const InsertExample = () => {
  const add = (insert) => {
    const type = getType();
    return store.addNotification(
      Object.assign({}, notification, {
        type,
        insert,
        message: getMessage(type),
        title: getTitle(type),
      }),
    );
  };

  return (
    <div>
      <Button
        className='notification-inset-btn'
        type='primary'
        onClick={() => add('top')}>
        Top
      </Button>
      <Button
        className='notification-inset-btn'
        type='primary'
        onClick={() => add('bottom')}>
        Bottom
      </Button>
    </div>
  );
};
export default InsertExample;
