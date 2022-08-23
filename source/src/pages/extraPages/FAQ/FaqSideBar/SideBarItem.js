import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {List} from 'antd';
import '../index.style.less';

const SideBarItem = ({item, onGetFaqData, selectionId}) => {
  return (
    <List.Item
      className={clsx('faq-sidebar-list-item', {
        active: item.id === selectionId,
      })}
      onClick={() => onGetFaqData(item.id)}>
      <span className='faq-sidebar-icon'>{item.icon}</span>
      <p>{item.name}</p>
    </List.Item>
  );
};

export default SideBarItem;

SideBarItem.propTypes = {
  item: PropTypes.object,
  selectionId: PropTypes.number,
  onGetFaqData: PropTypes.func,
};
