import React from 'react';
import {Col} from 'antd';

import 'react-notifications-component/dist/theme.css';
import ComponentCard from '@crema/core/AppComponentCard';
import ComponentHeader from '@crema/core/AppComponentHeader';
import AppRowSimpleContainer from '@crema/core/AppRowContainer/AppRowSimpleContainer';
import AnimationEntrance from './AnimationEntrance';
import AnimationEntranceSource from '!raw-loader!./AnimationEntrance';
import AnimationExit from './AnimationExit';
import AnimationExitSource from '!raw-loader!./AnimationExit';
import Insert from './Insert';
import InsertSource from '!raw-loader!./Insert';
import Container from './Container';
import ContainerSource from '!raw-loader!./Container';
import CustomContent from './CustomContent';
import CustomContentSource from '!raw-loader!./CustomContent';
import Type from './Type';
import TypeSource from '!raw-loader!./Type';
import ReactNotification from 'react-notifications-component';

const ReactNotificationEx = () => {
  return (
    <>
      <ComponentHeader
        title='React Notifications'
        description='Delightful and highly customisable React Component to notify your users.'
        refUrl='https://teodosii.github.io/react-notifications-component//'
      />

      <ReactNotification
        types={[
          {
            htmlClasses: ['notification-awesome'],
            name: 'awesome',
          },
        ]}
        isMobile={true}
      />
      <AppRowSimpleContainer>
        <Col span={24} key='notification-a'>
          <ComponentCard
            title='Animation Entrance'
            description='Entrance animation can be customised by specifying CSS classes'
            component={AnimationEntrance}
            source={AnimationEntranceSource}
          />
        </Col>
        <Col span={24} key='notification-b'>
          <ComponentCard
            title='Animation Exit'
            description='Exit animation can be customised by specifying CSS classes'
            component={AnimationExit}
            source={AnimationExitSource}
          />
        </Col>
        <Col span={24} key='notification-c'>
          <ComponentCard
            title='Container'
            description='Container can be set from predefined values top-left, top-right, top-center, bottom-left, bottom-right, bottom-center'
            component={Container}
            source={ContainerSource}
          />
        </Col>
        <Col span={24} key='notification-d'>
          <ComponentCard
            title='Custom Content'
            description="With react-notifications-component notification's content can be customised to suit your needs."
            component={CustomContent}
            source={CustomContentSource}
          />
        </Col>
        <Col span={24} key='notification-e'>
          <ComponentCard
            title='Insert'
            description='Insertion in react-notifications can be done either at the top or at the bottom of the container'
            component={Insert}
            source={InsertSource}
          />
        </Col>
        <Col span={24} key='notification-f'>
          <ComponentCard
            title='Type'
            description='Type can be set from predefined values success, default, warning, info, danger or custom to suit your needs'
            component={Type}
            source={TypeSource}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ReactNotificationEx;
