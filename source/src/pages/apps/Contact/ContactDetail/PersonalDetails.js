import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';

import {FiMail, FiPhone} from 'react-icons/fi';
import {AiOutlineGlobal, AiOutlineShopping} from 'react-icons/ai';

const PersonalDetails = ({contact}) => {
  return (
    <div className='contact-detail-modal-item'>
      <h6 className='contact-detail-modal-item-title'>
        <IntlMessages id='contactApp.personalDetails' />
      </h6>

      <div className='contact-detail-modal-item-content'>
        <div className='contact-other-detail-item'>
          <FiMail className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.email}
          </div>
        </div>

        <div className='contact-other-detail-item'>
          <FiPhone className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.contact}
          </div>
        </div>

        <div className='contact-other-detail-item'>
          <AiOutlineGlobal className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.website ? (
              contact.website
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>

        <div className='contact-other-detail-item'>
          <AiOutlineShopping className='contact-other-detail-item-icon' />
          <div className='contact-other-detail-item-content'>
            {contact.birthday ? (
              contact.birthday
            ) : (
              <IntlMessages id='common.na' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

PersonalDetails.propTypes = {
  contact: PropTypes.object,
};
