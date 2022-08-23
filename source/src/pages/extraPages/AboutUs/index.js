import React from 'react';
import Introduction from './Introduction';
import Team from './Team';
import {aboutUsData} from '../../../@crema/services/db/extraPages/aboutUs';
import Sections from './Sections';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const AboutUs = () => {
  const brandingData = aboutUsData.find((about) => about.alias === 'branding');
  const photoGraphyData = aboutUsData.find(
    (about) => about.alias === 'photography',
  );
  const seoData = aboutUsData.find((about) => about.alias === 'seo');

  return (
    <AppRowContainer type='bottom'>
      <AppPageMetadata title='About us' />
      <Col xs={24} md={24} key='a'>
        <Introduction />
      </Col>

      <Col xs={24} lg={8} key='b'>
        <Sections data={brandingData} />
      </Col>

      <Col xs={24} lg={8} key='c'>
        <Sections data={photoGraphyData} />
      </Col>

      <Col xs={24} lg={8} key='d'>
        <Sections data={seoData} />
      </Col>

      <Col xs={24} md={24} key='e'>
        <Team />
      </Col>
    </AppRowContainer>
  );
};

export default AboutUs;
