import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {Button, Card} from 'antd';
import './index.style.less';

const Introduction = () => {
  return (
    <Card className='about-intro-card'>
      <div className='about-img-view'>
        <div className='about-img'>
          <img
            src={'/assets/images/AboutUs.png'}
            alt='about us'
            title='aboutUs'
          />
        </div>
        <div className='about-img-content'>
          <h2>
            <IntlMessages id='extra.aboutUs' />
          </h2>
          <p>
            <IntlMessages id='extra.aboutContent' />
          </p>
          <div className='about-btn-view'>
            <Button type='primary' className='btn'>
              <IntlMessages id='extra.contactUs' />
            </Button>
            <Button className='btn about-read-btn'>
              <IntlMessages id='dashboard.readMore' />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Introduction;
