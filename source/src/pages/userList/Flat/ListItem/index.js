import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import UserSocialMediaInfo from './UserSocialMediaInfo';

const ListItem = (props) => {
  const {user} = props;

  return (
    <div className='user-flat-list-item'>
      <div className='user-flat-list-item-inner'>
        <div className='user-flat-list-item-thumb'>
          <img src={user.image} alt='user' />
        </div>

        <div className='user-flat-list-item-content'>
          <h3>
            <span>{user.name}</span>
            <span>
              <IntlMessages id='common.in' />
            </span>
            <span className='user-des'>{user.topic}</span>
          </h3>

          <p className='user-flat-list-item-para'>{user.information}</p>

          <UserSocialMediaInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
