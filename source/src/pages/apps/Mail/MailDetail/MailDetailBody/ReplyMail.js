import React, {useState} from 'react';
import moment from 'moment';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Button, Form, Input} from 'antd';
import {useIntl} from 'react-intl';
import ReactQuill from 'react-quill';
import '../../../../../shared/styles/vendors/ql-editor.css';
import {generateUniqueID} from '../../../../../@crema/utility/Utils';
import {senders} from '../../../../../@crema/services/db/apps/mail/mailList';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {AiOutlineDelete} from 'react-icons/ai';

const ReplyMail = (props) => {
  const [isShowCC, onShowCC] = useState(false);
  const [isShowBcc, onShowBcc] = useState(false);

  const {messages} = useIntl();
  const {message, isForward, index, onSubmitMail, onDeleteDraft} = props;

  const onFinish = (values) => {
    onSubmitMail(
      {
        messageId: generateUniqueID(),
        sender: getSender(),
        description: values.description,
        to: [message.sender],
        cc: values.cc,
        bcc: values.bcc,
        isStarred: false,
        sentOn: moment().format('lll'),
      },
      index,
    );
  };

  const getSender = () => {
    if (message.sender.id === senders[0].id) {
      return message.to[0];
    } else {
      return message.sender;
    }
  };
  return (
    <Form
      className='mail-detail-form'
      name='basic'
      initialValues={{
        username: isForward ? '' : getSender().email,
        ...message,
        description: '',
      }}
      onFinish={onFinish}>
      <Form.Item
        name='username'
        rules={[{required: true, message: 'Please input your username!'}]}>
        <Input
          className='mail-detail-input'
          prefix={
            <span className='mail-modal-prefix'>
              <IntlMessages id='common.to' />
            </span>
          }
          suffix={
            <span className='mail-modal-suffix'>
              <span onClick={() => onShowCC(!isShowCC)}>
                <IntlMessages id='common.cc' />
              </span>

              <span onClick={() => onShowBcc(!isShowBcc)}>
                <IntlMessages id='common.bcc' />
              </span>
            </span>
          }
        />
      </Form.Item>

      {isShowCC ? (
        <Form.Item
          name='cc'
          rules={[{required: true, message: 'Please input your cc!'}]}>
          <Input
            className='mail-detail-input'
            placeholder={messages['common.cc']}
          />
        </Form.Item>
      ) : null}

      {isShowBcc ? (
        <Form.Item
          name='bcc'
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input your bcc!',
            },
          ]}>
          <Input placeholder={messages['common.bcc']} />
        </Form.Item>
      ) : null}
      <Form.Item
        className='form-field'
        name='description'
        rules={[{required: true, message: 'Please input your Content!'}]}>
        <ReactQuill
          theme='snow'
          className='mail-detail-textarea'
          placeholder={messages['common.writeContent']}
        />
      </Form.Item>

      <div className='mail-detail-form-footer'>
        <Button type='primary' htmlType='submit' className='mail-detail-btn'>
          <IntlMessages id='common.send' />
        </Button>
        <div className='mail-detail-form-footer-action'>
          <AppIconButton
            title={<IntlMessages id='common.trash' />}
            icon={<AiOutlineDelete />}
            onClick={onDeleteDraft}
          />
        </div>
      </div>
    </Form>
  );
};

export default ReplyMail;

ReplyMail.propTypes = {
  message: PropTypes.object.isRequired,
  onSubmitMail: PropTypes.func,
  onDeleteDraft: PropTypes.func,
  isForward: PropTypes.bool,
  index: PropTypes.number,
};
