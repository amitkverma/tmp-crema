import React from 'react';
import {MdLabelOutline} from 'react-icons/md';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ItemMenu from './ItemMenu';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {Avatar, Checkbox} from 'antd';
import ActionBtnHover from './ActionBtnHover';

const ContactListItem = ({
  contact,
  labelList,
  onChangeCheckedContacts,
  checkedContacts,
  onChangeStarred,
  onSelectContactsForDelete,
  onViewContactDetail,
  onOpenEditContact,
}) => {
  const onGetLabelColor = (labelId) => {
    if (labelId) {
      return (
        labelList.length > 0 &&
        labelList.find((label) => label.id === labelId).color
      );
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className={clsx('contact-list-item item-hover', {
          rootCheck: checkedContacts.includes(contact.id),
        })}
        onClick={() => onViewContactDetail(contact)}>
        <span
          className='contact-list-item-checkbox-view'
          onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedContacts.includes(contact.id)}
            onChange={(event) => onChangeCheckedContacts(event, contact.id)}
            color='primary'
          />
        </span>
        <span
          className='contact-list-item-star'
          onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon item={contact} onChange={onChangeStarred} />
        </span>
        <span className='contact-list-item-avatar-view'>
          {contact.image ? (
            <Avatar size={36} src={contact.image} />
          ) : (
            <Avatar size={36} className='contact-list-item-avatar'>
              {contact.name[0].toUpperCase()}
            </Avatar>
          )}
        </span>
        <span className='text-truncate contact-list-item-title'>
          {contact.name}
        </span>

        <span className='text-truncate contact-list-item-col contact-list-item-email'>
          <span className='text-truncate'>
            {contact.email ? contact.email : null}
          </span>
        </span>
        <span className='text-truncate contact-list-item-col'>
          <span className='text-truncate'>{contact.contact}</span>
        </span>
        <span className='text-truncate contact-list-item-col contact-list-item-company'>
          <span className='text-truncate'>
            {contact.company ? contact.company : null}
          </span>
        </span>

        <span className='contact-list-item-action'>
          <MdLabelOutline
            className='contact-list-export-icon'
            style={{color: onGetLabelColor(contact.label)}}
          />

          <span
            className='contact-list-item-menu-view'
            onClick={(event) => event.stopPropagation()}>
            <ItemMenu
              onSelectContactsForDelete={onSelectContactsForDelete}
              contact={contact}
              onChangeStarred={onChangeStarred}
              onOpenEditContact={onOpenEditContact}
            />
          </span>
        </span>

        <ActionBtnHover
          contact={contact}
          onChangeStarred={onChangeStarred}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      </div>
    </>
  );
};

export default ContactListItem;

ContactListItem.defaultProps = {
  labelList: [],
  checkedContacts: [],
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  onChangeCheckedContacts: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
