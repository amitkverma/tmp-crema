import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Input} from 'antd';

const {TextArea} = Input;

const Notes = (props) => {
  const {contact} = props;
  const {messages} = useIntl();

  return (
    <div className='contact-note'>
      <h6 className='contact-detail-modal-item-title'>
        <IntlMessages id='common.notes' />
      </h6>

      <TextArea
        rows={4}
        placeholder={messages['common.notes']}
        name='notes'
        value={contact.notes}
      />
    </div>
  );
};

export default Notes;

Notes.propTypes = {
  contact: PropTypes.object.isRequired,
};
