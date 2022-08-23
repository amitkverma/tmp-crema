import React from 'react';
import {useDispatch} from 'react-redux';
import {onUpdateSelectedMail} from '../../../../../redux/actions/MailApp';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

const MailDetailBody = ({selectedMail}) => {
  const dispatch = useDispatch();

  const onSubmitMail = (message, index) => {
    let messages = selectedMail.messages;
    messages.splice(index + 1, 0, message);
    selectedMail.messages = messages;
    dispatch(onUpdateSelectedMail(selectedMail));
  };

  const onChangeStarred = (message, isStarred) => {
    message.isStarred = isStarred;
    selectedMail.messages = selectedMail.messages.map((data) =>
      data.messageId === message.messageId ? message : data,
    );
    dispatch(onUpdateSelectedMail(selectedMail));
  };

  return (
    <div className='mail-detail-body'>
      {selectedMail ? (
        <div className='mail-detail-body-content'>
          {selectedMail.messages.map((message, index) => (
            <MessageItem
              key={index}
              index={index}
              mailLength={selectedMail.messages.length}
              message={message}
              onSubmitMail={onSubmitMail}
              onChangeStarred={onChangeStarred}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MailDetailBody;

MailDetailBody.propTypes = {
  selectedMail: PropTypes.object.isRequired,
};
