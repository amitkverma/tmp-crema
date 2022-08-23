import React from 'react';
import {store} from 'react-notifications-component';
import {Button} from 'antd';
import '../index.style.less';

import {getContainer, getMessage, getType} from '../helpers/randomize';
import notification from '../helpers/notification';

const AnimationExit = () => {
  const add = (htmlClasses) => {
    const type = getType();
    return store.addNotification(
      Object.assign({}, notification, {
        slidingExit: {delay: 300},
        animationOut: htmlClasses,
        container: getContainer(),
        message: getMessage(type),
        type,
      }),
    );
  };

  return (
    <div className='react-notification'>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated bounceOut'])}>
          Bounce Out
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated fadeOut'])}>
          Fade Out
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated flipOutX'])}>
          Flip Out X
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated flipOutY'])}>
          Flip Out Y
        </Button>
      </div>
      <div className='react-notification-item'>
        <Button type='primary' onClick={() => add(['animated zoomOut'])}>
          Zoom Out
        </Button>
      </div>
    </div>
  );
};
export default AnimationExit;
