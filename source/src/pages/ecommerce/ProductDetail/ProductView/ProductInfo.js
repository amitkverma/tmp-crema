import React from 'react';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col} from 'antd';

const productInfo = [
  {
    id: 1,
    title: 'Sweat Proof',
    desc: 'Yes',
  },
  {
    id: 2,
    title: 'Deep Bass',
    desc: 'Yes',
  },
  {
    id: 3,
    title: 'Water Resistant',
    desc: 'Yes',
  },
  {
    id: 4,
    title: 'Designed For',
    desc: 'MOBILE, iPHONE, LAPTOP, ALL ANDRIOD PHONE',
  },
  {
    id: 5,
    title: 'Series',
    desc: 'SH12',
  },
  {
    id: 6,
    title: 'System Requirements',
    desc: 'BLUETOOTH',
  },
  {
    id: 7,
    title: 'Circumaural/ Supraaural',
    desc: 'Circumaural',
  },
  {
    id: 8,
    title: 'Open/Closed Back',
    desc: 'OPEN',
  },
  {
    id: 9,
    title: 'indicators',
    desc: 'Connection Indicator, Power Indicator',
  },
  {
    id: 10,
    title: 'Controls',
    desc: 'PLAY/PAUSE',
  },
  {
    id: 11,
    title: 'Theme',
    desc: 'NA',
  },
  {
    id: 12,
    title: 'Total Harmonic Distortion',
    desc: '0.%',
  },
  {
    id: 13,
    title: 'Number of Pins',
    desc: '1',
  },
  {
    id: 14,
    title: 'With Microphone',
    desc: 'Yes',
  },
];
const ProductInfo = () => {
  return (
    <div className='product-detail-specification'>
      <h3 className='product-detail-item-title'>Product Details</h3>
      <AppRowContainer>
        {productInfo.map((data) => (
          <>
            <Col xs={8}>
              <p className='text-secondary'>{data.title}</p>
            </Col>
            <Col xs={16}>
              <p> {data.desc}</p>
            </Col>
          </>
        ))}
      </AppRowContainer>
    </div>
  );
};

export default ProductInfo;
