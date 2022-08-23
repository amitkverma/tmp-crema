import React from 'react';
import {store} from 'react-notifications-component';
import {Button} from 'antd';

import notification from '../helpers/notification';
import {getContainer} from '../helpers/randomize';
import '../index.style.less';

export default class CustomContentExample extends React.Component {
  addCustomIcon = (type, iconClassName) => {
    let message;
    if (type === 'success') {
      message = 'Your agenda has been successfully synced';
    } else if (type === 'warning') {
      message = 'Warning! All your db will be lost if you proceed';
    } else if (type === 'danger') {
      message = 'Error! You have no update rights';
    }

    store.addNotification(
      Object.assign({}, notification, {
        width: 275,
        container: getContainer(),
        content: (
          <div className={`notification-custom-${type}`}>
            <div className='notification-custom-icon'>
              <i className={iconClassName} />
            </div>
            <div className='notification-custom-content'>
              <p className='notification-message'>{message}</p>
            </div>
          </div>
        ),
      }),
    );
  };

  add = () => {
    store.addNotification(
      Object.assign({}, notification, {
        width: 325,
        container: getContainer(),
        content: (
          <div className='notification-custom-image'>
            <img src='/assets/images/logo.png' alt='' />
            <span className='notification-custom-image-content'>
              Crema Admin
            </span>
          </div>
        ),
      }),
    );
  };

  render() {
    return (
      <div className='react-notification'>
        <div className='react-notification-item'>
          <Button type='primary' onClick={this.add}>
            Custom Image Content
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button
            type='primary'
            onClick={() =>
              this.addCustomIcon('success', 'fas fa-check-circle')
            }>
            Success with Icon
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button
            type='primary'
            onClick={() =>
              this.addCustomIcon('danger', 'fas fa-exclamation-circle')
            }>
            Danger with Icon
          </Button>
        </div>
        <div className='react-notification-item'>
          <Button
            type='primary'
            onClick={() =>
              this.addCustomIcon('warning', 'fas fa-exclamation-triangle')
            }>
            Warning with Icon
          </Button>
        </div>
      </div>
    );
  }
}
