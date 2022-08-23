import React, {useState} from 'react';
import AppInfoView from '@crema/core/AppInfoView';
import FaqSideBar from './FaqSideBar';
import FaqList from './FaqList';
import {generalFaq} from '../../../@crema/services/db/extraPages/faqList/general';
import {installationFaq} from '../../../@crema/services/db/extraPages/faqList/installation';
import {pricingFaq} from '../../../@crema/services/db/extraPages/faqList/pricing';
import {licenseFaq} from '../../../@crema/services/db/extraPages/faqList/licenseTypes';
import {supportFaq} from '../../../@crema/services/db/extraPages/faqList/support';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import './index.style.less';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const FAQ = () => {
  const [dataValue, setDataValue] = useState(generalFaq);
  const [selectionId, setSelectionId] = useState(101);

  const onGetFaqData = (value) => {
    setSelectionId(value);
    switch (value) {
      case 101:
        setDataValue(generalFaq);
        break;

      case 102:
        setDataValue(installationFaq);
        break;

      case 103:
        setDataValue(pricingFaq);
        break;

      case 104:
        setDataValue(licenseFaq);
        break;

      case 105:
        setDataValue(supportFaq);
        break;
      default: {
        break;
      }
    }
  };

  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='FAQ' />
      <div className='faq-section' key='a'>
        <div className='faq-header'>
          <h2>
            <IntlMessages id='faq.heading' />
          </h2>
          <p>
            <IntlMessages id='faq.content' />
          </p>
        </div>

        <AppRowContainer type='bottom'>
          <Col xs={24} md={8} lg={6} key='a'>
            <FaqSideBar onGetFaqData={onGetFaqData} selectionId={selectionId} />
          </Col>

          <Col xs={24} md={16} lg={18} key='b'>
            <FaqList faqList={dataValue} />
            <AppInfoView />
          </Col>
        </AppRowContainer>
      </div>
    </AppAnimateGroup>
  );
};

export default FAQ;
