import React from 'react';
import AppCard from '../../../../@crema/core/AppCard';
import {Button} from 'antd';
import './index.style.less';

const PromoCard = () => {
  return (
    <AppCard heightFull className='promo-card'>
      <div className='promo-content'>
        <div className='promo-thumb'>
          <img src={'/assets/images/dashboard/academy/promo.png'} alt='promo' />
        </div>
        <h3>Do you want to get</h3>
        <p>Better results?</p>
        <div>
          <Button className='btn' size='small'>
            Upgrade
          </Button>
        </div>
      </div>
    </AppCard>
  );
};

export default PromoCard;
