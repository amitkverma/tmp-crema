import React from 'react';
import MessageItem from '../../../../@crema/core/AppHeaderMessages/MessageItem';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {List, Button} from 'antd';

import {CloseOutlined} from '@ant-design/icons';

const Messages = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.messages']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }>
      <List
        dataSource={data}
        renderItem={(item) => {
          return <MessageItem key={item.id} item={item} />;
        }}
      />
    </AppCard>
  );
};

export default Messages;

Messages.defaultProps = {
  data: [],
};

Messages.propTypes = {
  data: PropTypes.array,
};
