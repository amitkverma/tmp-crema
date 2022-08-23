import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const PackageTwo = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 2' className='package-two-card'>
      <AppRowContainer className='package-two-row'>
        {pricing.map((data, index) => (
          <Col item xs={24} md={12} lg={8} key={index}>
            <PackageCard pricing={data} />
          </Col>
        ))}
      </AppRowContainer>
    </AppCard>
  );
};

export default PackageTwo;

PackageTwo.propTypes = {
  pricing: PropTypes.array,
};
