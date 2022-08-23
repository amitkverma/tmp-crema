import React from 'react';
import {MdLabelOutline} from 'react-icons/md';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {Avatar} from 'antd';
import {CheckOutlined} from '@ant-design/icons';

const ContactListItemMobile = ({
  contact,
  labelList,
  checkedContacts,
  onChangeStarred,
  onViewContactDetail,
  onChangeCheckedContacts,
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
        className={clsx('contact-list-item-mobile item-hover', {
          rootCheck: checkedContacts.includes(contact.id),
        })}
        onClick={() => onViewContactDetail(contact)}>
        <div className='contact-list-item-main-content-mobile'>
          <div
            className={clsx('contact-list-avatar-mobile-view', {
              checked: checkedContacts.includes(contact.id),
            })}
            onClick={(event) => {
              event.stopPropagation();
              onChangeCheckedContacts(
                !checkedContacts.includes(contact.id),
                contact.id,
              );
            }}>
            {checkedContacts.includes(contact.id) ? (
              <CheckOutlined />
            ) : (
              <span className='contact-list-item-avatar-view'>
                {contact.image ? (
                  <Avatar size={36} src={contact.image} />
                ) : (
                  <Avatar size={36} className='contact-list-item-avatar'>
                    {contact.name[0].toUpperCase()}
                  </Avatar>
                )}
              </span>
            )}
          </div>

          <div className='contact-list-item-content-mobile'>
            <span className='text-truncate contact-list-item-mobile-title'>
              {contact.name}
            </span>

            <span className='text-truncate'>{contact.contact}</span>
          </div>
        </div>
        <div className='contact-list-item-action-mobile'>
          <MdLabelOutline
            className='contact-list-export-mobile-icon'
            style={{color: onGetLabelColor(contact.label)}}
          />

          <span
            className='contact-list-item-star-mobile'
            onClick={(event) => event.stopPropagation()}>
            <AppsStarredIcon item={contact} onChange={onChangeStarred} />
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactListItemMobile;

ContactListItemMobile.defaultProps = {
  labelList: [],
  checkedContacts: [],
};

ContactListItemMobile.propTypes = {
  contact: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onViewContactDetail: PropTypes.func,
  onChangeCheckedContacts: PropTypes.func,
};
