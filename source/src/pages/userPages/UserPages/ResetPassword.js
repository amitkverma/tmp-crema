import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Button, Card, Form, Input} from 'antd';
import {useIntl} from 'react-intl';
import '../index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const ResetPassword = () => {
  const {messages} = useIntl();
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Reset Password' />
        <div className='user-container' key='a'>
          <Card className='user-card'>
            <div className='user-card-header'>
              <div className='user-card-logo'>
                <img
                  src={'/assets/images/logo.png'}
                  alt='crema'
                  title='crema'
                />
              </div>
              <h3>
                <IntlMessages id='common.resetPassword' />
              </h3>
            </div>

            <Form
              className='user-form mb-0'
              name='basic'
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <Form.Item
                name='oldPassword'
                className='form-field'
                rules={[
                  {required: true, message: 'Please input your Old Password!'},
                ]}>
                <Input
                  type='password'
                  placeholder={messages['common.oldPassword']}
                />
              </Form.Item>

              <Form.Item
                name='newPassword'
                className='form-field'
                rules={[
                  {required: true, message: 'Please input your New Password!'},
                ]}>
                <Input
                  type='password'
                  placeholder={messages['common.newPassword']}
                />
              </Form.Item>

              <Form.Item
                name='confirmPassword'
                className='form-field'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Retype Password!',
                  },
                ]}>
                <Input
                  type='password'
                  placeholder={messages['common.retypePassword']}
                />
              </Form.Item>

              <Button
                type='primary'
                htmlType='submit'
                className='user-form-btn'>
                <IntlMessages id='common.resetMyPassword' />
              </Button>
            </Form>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default ResetPassword;
