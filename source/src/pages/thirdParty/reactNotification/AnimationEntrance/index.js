import React from 'react';
import {store} from 'react-notifications-component';
import {Button} from 'antd';
import {getContainer, getMessage, getType} from '../helpers/randomize';
import notification from '../helpers/notification';
import '../index.style.less';

const AnimationEntrance = () => {
  const add = (htmlClasses) => {
    const type = getType();
    return store.addNotification(
      Object.assign({}, notification, {
        animationIn: htmlClasses,
        container: getContainer(),
        message: getMessage(type),
        type,
      }),
    );
  };

  return (
    <div className='react-notification'>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated bounceIn'])}>
          Bounce In
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated fadeIn'])}>
          Fade In
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated flipInX'])}>
          Flip In X
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated flipInY'])}>
          Flip In Y
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated zoomIn'])}>
          Zoom In
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated flash'])}>
          Flash
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated jackInTheBox'])}>
          Jack In The Box
        </Button>
      </div>
    </div>
  );
};
export default AnimationEntrance;
