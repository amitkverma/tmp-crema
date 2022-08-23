import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {onSelectUser} from '../../../../../../redux/actions';
import clsx from 'clsx';
import {Avatar} from 'antd';
import {green, red} from '@ant-design/colors';
import '../../UserInfo.style.less';

const ConnectionItem = (props) => {
  const {item, selectedUser} = props;
  const dispatch = useDispatch();

  return (
    <div
      className={clsx('chat-list-item item-hover', {
        active: selectedUser && selectedUser.id === item.id,
      })}
      onClick={() => dispatch(onSelectUser(item))}>
      <div className='chat-avatar-view'>
        <Avatar className='chat-avatar' src={item.image} />
        <span
          className='chat-user-status-dot chat-user-status-dot-only'
          style={{
            backgroundColor: item.status === 'online' ? green[6] : red[6],
          }}
        />
      </div>
      <div className='chat-list-item-content'>
        <h3>{item.name}</h3>
        <p className='text-truncate mb-0'>@{item.username}</p>
      </div>
    </div>
  );
};

export default ConnectionItem;

ConnectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
};
