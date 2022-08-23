import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Button, Card, Checkbox, Form, Input} from 'antd';

import '../index.style.less';
import {useIntl} from 'react-intl';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Signup = () => {
  const {messages} = useIntl();
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Signup' />
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
                <IntlMessages id='common.signup' />
              </h3>
            </div>

            <Form
              className='user-form'
              name='basic'
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <Form.Item
                name='name'
                className='form-field'
                rules={[{required: true, message: 'Please input your Name!'}]}>
                <Input placeholder={messages['common.name']} />
              </Form.Item>

              <Form.Item
                name='email'
                className='form-field'
                rules={[{required: true, message: 'Please input your Email!'}]}>
                <Input placeholder={messages['common.email']} />
              </Form.Item>

              <Form.Item
                name='password'
                className='form-field'
                rules={[
                  {required: true, message: 'Please input your Password!'},
                ]}>
                <Input
                  type='password'
                  placeholder={messages['common.password']}
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

              <Form.Item
                className='user-field-action user-field-action-row'
                name='remember'
                valuePropName='checked'>
                <>
                  <Checkbox>
                    <IntlMessages id='common.iAgreeTo' />
                  </Checkbox>
                  <span className='user-field-action-link'>
                    <IntlMessages id='common.termConditions' />
                  </span>
                </>
              </Form.Item>

              <Button
                type='primary'
                className='user-form-btn'
                htmlType='submit'>
                <IntlMessages id='common.signup' />
              </Button>
            </Form>

            <div className='user-card-footer'>
              <span>
                <IntlMessages id='common.alreadyHaveAccount' />
              </span>
              <span className='user-card-footer-link'>
                <IntlMessages id='common.signInHere' />
              </span>
            </div>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default Signup;
