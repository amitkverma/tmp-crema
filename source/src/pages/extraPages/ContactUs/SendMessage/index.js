import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import './index.style.less';

const SendMessage = ({sendMessage}) => {
  return (
    <div className='send-message'>
      <h3 className='send-message-title'>
        <IntlMessages id='extraPages.sendUsMessage' />
      </h3>
      <p>{sendMessage.description}</p>
    </div>
  );
};

export default SendMessage;

SendMessage.propTypes = {
  sendMessage: PropTypes.object,
};
