import React from 'react';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FiMail, FiPhone} from 'react-icons/fi';
import './index.style.less';

const Address = () => {
  return (
    <div className='contact-address'>
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <HiOutlineLocationMarker />
        </div>
        <p>
          795 Folsom Ave, Suite 600 <br /> San Francisco, CA 94107
        </p>
      </div>
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <FiPhone />
        </div>
        <p>(120) 456-789-123</p>
      </div>
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <FiMail />
        </div>
        <p>support@yourmail.com</p>
      </div>
    </div>
  );
};

export default Address;
