import React from 'react';
import PropTypes from 'prop-types';
import PackageCard from './PackageCard';
import AppCard from '../../../../@crema/core/AppCard';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';
import './index.style.less';

const PackageOne = ({pricing}) => {
  return (
    <AppCard title='Pricing Package Style 1' className='package-one-card'>
      <AppRowContainer className='package-one-row'>
        {pricing.map((data, index) => (
          <Col item xs={24} md={12} lg={8} key={index}>
            <PackageCard pricing={data} />
          </Col>
        ))}
      </AppRowContainer>
    </AppCard>
  );
};

export default PackageOne;

PackageOne.propTypes = {
  pricing: PropTypes.array,
};
