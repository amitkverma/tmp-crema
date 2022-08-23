import React from 'react';
import {store} from 'react-notifications-component';
import {Button} from 'antd';
import '../index.style.less';

import notification from '../helpers/notification';
import {getMessage, getTitle, getType} from '../helpers/randomize';

export default class ContainerExample extends React.Component {
  add = (container) => {
    const type = getType();

    return store.addNotification(
      Object.assign({}, notification, {
        title: getTitle(type),
        message: getMessage(type),
        container,
        type,
      }),
    );
  };

  render() {
    return (
      <div className='react-notification'>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('top-left')}>
            Top Left
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('top-right')}>
            Top Right
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('top-center')}>
            Top Center
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('bottom-left')}>
            Bottom Left
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('bottom-right')}>
            Bottom Right
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('bottom-center')}>
            Bottom Center
          </Button>
        </div>
      </div>
    );
  }
}
