import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const BirthdayCard = () => {
  return (
    <AppCard heightFull className='birthday-card no-card-space'>
      <div className='birthday-header'>
        <h3>Sunday, 07 July 1991</h3>
      </div>
      <div className='birthday-content'>
        <div className='birthday-thumb'>
          <img src={'/assets/images/cakeicon.png'} alt='cake' />
        </div>
        <p>
          <IntlMessages id='dashboard.antonBirthday' />
        </p>
      </div>
    </AppCard>
  );
};

export default BirthdayCard;
