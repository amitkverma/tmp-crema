import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import ItemMenu from './ItemMenu';
import {IdcardOutlined, PhoneOutlined} from '@ant-design/icons';
import clsx from 'clsx';
import {Card, Checkbox, Avatar} from 'antd';
import ActionBtnHover from './ActionBtnHover';

const ContactGridItem = (props) => {
  const {
    contact,
    onChangeCheckedContacts,
    checkedContacts,
    onChangeStarred,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;

  return (
    <Card
      className={clsx('contact-grid-card card-hover')}
      onClick={() => onViewContactDetail(contact)}>
      <div className='contact-grid-card-header'>
        <span
          className='contact-grid-card-header-checkbox'
          onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedContacts.includes(contact.id)}
            onChange={(event) => onChangeCheckedContacts(event, contact.id)}
            color='primary'
          />
        </span>

        {contact.image ? (
          <Avatar className='contact-grid-card-avatar' src={contact.image} />
        ) : (
          <Avatar className='contact-grid-card-avatar'>
            {contact.name[0].toUpperCase()}
          </Avatar>
        )}

        <span
          className='contact-grid-card-header-action'
          onClick={(event) => event.stopPropagation()}>
          <ItemMenu
            onSelectContactsForDelete={onSelectContactsForDelete}
            contact={contact}
            onChangeStarred={onChangeStarred}
            onOpenEditContact={onOpenEditContact}
          />
        </span>

        <ActionBtnHover
          contact={contact}
          onChangeStarred={onChangeStarred}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      </div>

      <div className='contact-grid-card-content'>
        <h3 className='contact-grid-card-title'>{contact.name}</h3>
        <p className='text-truncate'>{contact.email ? contact.email : null}</p>
      </div>

      <div className='contact-grid-card-action'>
        <div className='contact-grid-card-action-item'>
          <IdcardOutlined className='contact-grid-card-icon' />
          <p className='text-truncate mb-0'>
            {contact.company ? (
              contact.company
            ) : (
              <IntlMessages id='common.na' />
            )}
          </p>
        </div>
        <div className='contact-grid-card-action-item'>
          <PhoneOutlined className='contact-grid-card-icon' />
          <p className='text-truncate mb-0'>{contact.contact}</p>
        </div>
      </div>
    </Card>
  );
};

export default ContactGridItem;

ContactGridItem.defaultProps = {
  checkedContacts: [],
};

ContactGridItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onChangeCheckedContacts: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onViewContactDetail: PropTypes.func,
};
