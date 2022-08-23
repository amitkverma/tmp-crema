import React from 'react';
import InjectMassage from '../../@crema/utility/IntlMessages';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';

const MenuLevel = () => {
  return (
    <AppAnimateGroup type='bottom'>
      <div
        style={{
          fontSize: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <InjectMassage id='sidebar.multiLevel' />
      </div>
    </AppAnimateGroup>
  );
};

export default MenuLevel;
