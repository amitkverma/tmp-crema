import React, {useState} from 'react';
import moment from 'moment';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Button, Form, Input, Modal} from 'antd';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {MailOutlined} from '@ant-design/icons';
import ReactQuill from 'react-quill';
import '../../../../shared/styles/vendors/ql-editor.css';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {onComposeMail} from '../../../../redux/actions';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import './index.style.less';

export const isValidEmail = (value) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const ComposeMail = (props) => {
  const {isComposeMail, onCloseComposeMail} = props;
  const dispatch = useDispatch();

  const [isShowBcc, onShowBcc] = useState(false);

  const [isShowCC, onShowCC] = useState(false);

  const {messages} = useIntl();
  const {pathname} = useLocation();

  const onFinish = (values) => {
    const mail = {
      id: Math.floor(Math.random()) * 1000,
      isChecked: false,
      isStarred: false,
      label: {
        id: 211,
        name: 'Crema',
        alias: 'crema',
        icon: <MailOutlined />,
      },
      sender: {
        name: values.displayName ? values.displayName : values.username,
        email: values.username,
        profilePic: '',
      },
      hasAttachments: false,
      isRead: true,
      folderValue: 122,
      sentOn: moment().format('llll'),
      description: values.content ? values.content : 'No Message',
      subject: values.subject !== '' ? values.subject : 'No Subject',
    };
    console.log('Success:', values);
    dispatch(onComposeMail(mail, pathname));
    onCloseComposeMail(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      title={messages['mailApp.compose']}
      visible={isComposeMail}
      width={800}
      onOk={isComposeMail}
      onCancel={() => onCloseComposeMail(false)}
      footer={false}
      className='mail-modal'>
      <AppScrollbar className='mail-modal-scrollbar'>
        <Form
          className='mail-form'
          name='basic'
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <div className='mail-modal-content'>
            <Form.Item
              className='mail-modal-to'
              name='username'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input email!',
                },
              ]}>
              <Input
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
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your cc!',
                  },
                ]}>
                <Input placeholder={messages['common.cc']} />
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
              name='subject'
              rules={[{required: true, message: 'Please input your Subject!'}]}>
              <Input placeholder={messages['common.subject']} />
            </Form.Item>

            <Form.Item name='content'>
              <ReactQuill
                theme='snow'
                className='mail-modal-textarea'
                placeholder={messages['common.writeContent']}
              />
            </Form.Item>
          </div>

          <div className='mail-modal-footer'>
            <Button type='primary' className='mail-modal-btn' htmlType='submit'>
              <IntlMessages id='common.send' />
            </Button>
          </div>
        </Form>
      </AppScrollbar>
    </Modal>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
};
