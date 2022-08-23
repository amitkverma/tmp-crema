import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';

const ActionBtnHover = (props) => {
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

  return (
    <span className='contact-list-item-action-hover'>
      <AppsStarredIcon item={contact} onChange={onChangeStarredStatus} />
      <AppIconButton
        onClick={onClickEditOption}
        title={<IntlMessages id='common.edit' />}
        icon={<AiOutlineEdit />}
      />
      <AppIconButton
        onClick={onDeleteContact}
        title={<IntlMessages id='common.delete' />}
        icon={<AiOutlineDelete />}
      />
    </span>
  );
};

export default ActionBtnHover;

ActionBtnHover.propTypes = {
  onSelectContactsForDelete: PropTypes.func,
  contact: PropTypes.object.isRequired,
  onChangeStarred: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
