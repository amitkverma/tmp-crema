import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {onUpdateSelectedContact} from '../../../../redux/actions/ContactApp';
import PropTypes from 'prop-types';
import ContactActions from './ContactActions';
import PersonalDetails from './PersonalDetails';
import OtherDetails from './OtherDetails';
import {Col, Avatar, Modal, Button} from 'antd';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import './index.style.less';
import {AppRowContainer} from '../../../../@crema';
import IntlMessages from '../../../../@crema/utility/IntlMessages';

const ContactDetail = (props) => {
  const {
    isShowDetail,
    selectedContact,
    onShowDetail,
    onSelectContactsForDelete,
    onOpenEditContact,
  } = props;
  const dispatch = useDispatch();

  const [contact, setContact] = useState(selectedContact);

  useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);

  const onChangeStarred = (checked) => {
    const updatedContact = contact;
    contact.isStarred = checked;
    setContact(updatedContact);
    dispatch(onUpdateSelectedContact(contact));
  };

  const onDeleteContact = () => {
    onSelectContactsForDelete([contact.id]);
    onShowDetail(false);
  };

  const onContactDetailClose = () => {
    onShowDetail(false);
  };

  return (
    <>
      <Modal
        visible={isShowDetail}
        onOk={isShowDetail}
        footer={false}
        onCancel={() => onShowDetail(false)}
        className='contact-detail-modal'>
        <div className='contact-detail-modal-header'>
          <ContactActions
            onChangeStarred={onChangeStarred}
            onDeleteContact={onDeleteContact}
            onOpenEditContact={onOpenEditContact}
            contact={contact}
          />
          <div className='contact-detail-modal-user'>
            {contact.image ? (
              <Avatar
                className='contact-detail-modal-user-avatar'
                src={contact.image}
              />
            ) : (
              <Avatar className='contact-detail-modal-user-avatar'>
                {contact.name[0].toUpperCase()}
              </Avatar>
            )}
            <h4>{contact.name}</h4>
          </div>
        </div>

        <AppScrollbar className='contact-detail-modal-scrollbar'>
          <div className='contact-detail-modal-content'>
            <AppRowContainer>
              <Col item xs={24} md={12}>
                <PersonalDetails contact={contact} />
              </Col>
              <Col item xs={24} md={12}>
                <OtherDetails contact={contact} />
              </Col>
            </AppRowContainer>
          </div>

          <div className='contact-form-footer'>
            <Button
              type='primary'
              ghost
              className='contact-form-btn'
              onClick={onContactDetailClose}>
              <IntlMessages id='common.cancel' />
            </Button>
          </div>
        </AppScrollbar>
      </Modal>
    </>
  );
};

export default ContactDetail;

ContactDetail.propTypes = {
  isShowDetail: PropTypes.bool.isRequired,
  onShowDetail: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
};
