import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {Col} from 'antd';

const PackageFour = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 4' className='package-four-card'>
      <AppRowContainer className='package-four-row'>
        {pricing.map((data, index) => (
          <Col item xs={24} md={12} lg={8} key={index}>
            <PackageCard pricing={data} />
          </Col>
        ))}
      </AppRowContainer>
    </AppCard>
  );
};

export default PackageFour;

PackageFour.propTypes = {
  pricing: PropTypes.array,
};
