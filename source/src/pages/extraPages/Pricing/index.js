import React from 'react';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import PackageTwo from './PackageTwo';
import pricingData from '../../../@crema/services/db/extraPages/pricing';
import PackageOne from './PackageOne';
import PackageThree from './PackageThree';
import PackageFour from './PackageFour';

const Pricing = () => {
  return (
    <AppRowContainer>
      <Col item xs={24}>
        <PackageOne pricing={pricingData.pricingOne} />
      </Col>
      <Col item xs={24}>
        <PackageTwo pricing={pricingData.pricingTwo} />
      </Col>
      <Col item xs={24}>
        <PackageThree pricing={pricingData.pricingFour} />
      </Col>
      <Col item xs={24}>
        <PackageFour pricing={pricingData.pricingFour} />
      </Col>
    </AppRowContainer>
  );
};

export default Pricing;
