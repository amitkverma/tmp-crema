import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

const HollywoodMovie = () => {
  return (
    <AppCard className='hollywood-card background-image' heightFull>
      <div className='hollywood-content'>
        <div className='hollywood-content-action'>
          <span className='hollywood-avatar'>
            <img src={'/assets/images/playbutton.png'} alt='play' />
          </span>
        </div>
        <div className='hollywood-footer'>
          <h1>
            <IntlMessages id='dashboard.hollywoodMovie' />
          </h1>
        </div>
      </div>
    </AppCard>
  );
};

export default HollywoodMovie;
