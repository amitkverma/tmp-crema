import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import {getTimeFromNow} from '../../../../@crema/utility/helper/DateHelper';

const RequestItem = ({request}) => {
  return (
    <div className='request-item item-hover'>
      <Avatar className='request-avatar' src={request.profilePic} />
      <div className='request-item-info'>
        <div className='request-item-content'>
          <h4>{request.name}</h4>
          <p>{getTimeFromNow(request.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;

RequestItem.propTypes = {
  request: PropTypes.object,
};
