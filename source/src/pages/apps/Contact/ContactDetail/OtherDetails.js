import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {RiFoldersLine} from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai';
import {FiFacebook, FiTwitter} from 'react-icons/fi';

const OtherDetails = (props) => {
  const {contact} = props;

  return (
    <div className='contact-detail-modal-item'>
      <h6 className='contact-detail-modal-item-title'>
        <IntlMessages id='common.otherDetails' />
      </h6>

      <div className='contact-detail-modal-item-content'>
        <div className='contact-other-detail-item'>
          <RiFoldersLine className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.company ? (
              contact.company
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className='contact-other-detail-item'>
          <AiOutlineHome className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.address ? (
              contact.address
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
        <div className='contact-other-detail-item'>
          <FiFacebook className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.facebookId ? (
              contact.facebookId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className='contact-other-detail-item'>
          <FiTwitter className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.twitterId ? (
              contact.twitterId
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;

OtherDetails.propTypes = {
  contact: PropTypes.object.isRequired,
};
