import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Dropdown, Menu} from 'antd';
import {MoreOutlined} from '@ant-design/icons';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const ItemMenu = (props) => {
  const {
    onSelectContactsForDelete,
    contact,
    onChangeStarred,
    onOpenEditContact,
  } = props;

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
  };

  const onChangeStarredStatus = () => {
    onChangeStarred(!contact.isStarred, contact);
  };

  const onClickEditOption = () => {
    onOpenEditContact(contact);
  };

  const menuLabel = (
    <Menu>
      <Menu.Item onClick={onChangeStarredStatus}>
        {contact.isStarred ? (
          <IntlMessages id='common.unstarred' />
        ) : (
          <IntlMessages id='common.starred' />
        )}
      </Menu.Item>

      <Menu.Item onClick={onClickEditOption}>
        <IntlMessages id='common.edit' />
      </Menu.Item>
      <Menu.Item onClick={onDeleteContact}>
        <IntlMessages id='common.delete' />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menuLabel} trigger={['click']}>
      <AppIconButton
        icon={<MoreOutlined />}
        title={<IntlMessages id='common.more' />}
      />
    </Dropdown>
  );
};

export default ItemMenu;

ItemMenu.propTypes = {
  onSelectContactsForDelete: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
