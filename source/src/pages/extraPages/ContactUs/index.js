import React from 'react';
import ContactUsForm from './ContactUsForm';
import SendMessage from './SendMessage';
import contactUsData from '../../../@crema/services/db/extraPages/contactUs';
import Address from './Address';
import SimpleMap from './SimpleMap';
import AppCard from '../../../@crema/core/AppCard';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import './index.style.less';

const ContactUs = () => {
  return (
    <AppCard>
      <div className='contact-simple-map'>
        <SimpleMap />
      </div>
      <SendMessage sendMessage={contactUsData.sendMessage} />
      <AppRowContainer>
        <Col item xs={24} md={12}>
          <ContactUsForm />
        </Col>
        <Col item xs={24} md={12}>
          <Address />
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default ContactUs;
