import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppCard from '../../../../@crema/core/AppCard';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import './index.style.less';

const PackageThree = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 3' className='package-three-card'>
      <AppRowContainer className='package-three-row'>
        {pricing.map((data, index) => (
          <Col item xs={24} md={12} lg={8} key={index}>
            <PackageCard pricing={data} />
          </Col>
        ))}
      </AppRowContainer>
    </AppCard>
  );
};

export default PackageThree;

PackageThree.propTypes = {
  pricing: PropTypes.array,
};
