import React from 'react';
import {store} from 'react-notifications-component';
import {Button} from 'antd';
import '../index.style.less';

import notification from '../helpers/notification';
import {getContainer, getMessage, getTitle} from '../helpers/randomize';

export default class TypeExample extends React.Component {
  add = (type) => {
    return store.addNotification(
      Object.assign({}, notification, {
        type,
        title: getTitle(type),
        message: getMessage(type),
        container: getContainer(),
      }),
    );
  };

  render() {
    return (
      <div className='react-notification'>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('success')}>
            Success
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('default')}>
            Default
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('warning')}>
            Warning
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('info')}>
            Info
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('danger')}>
            Danger
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button type='primary' onClick={() => this.add('awesome')}>
            Custom
          </Button>
        </div>
      </div>
    );
  }
}
