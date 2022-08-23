import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Button, Card, Checkbox, Form, Input} from 'antd';
import {FaFacebookF} from 'react-icons/fa';
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';

import '../index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Signin = () => {
  const {messages} = useIntl();
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Signin' />
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
                <IntlMessages id='common.login' />
              </h3>
            </div>

            <Form
              className='user-form'
              name='basic'
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
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
                className='user-field-action'
                name='remember'
                valuePropName='checked'>
                <>
                  <Checkbox>
                    <IntlMessages id='common.rememberMe' />
                  </Checkbox>
                  <span className='user-field-action-link ml-auto'>
                    <IntlMessages id='common.forgetPassword' />
                  </span>
                </>
              </Form.Item>

              <Button
                type='primary'
                htmlType='submit'
                className='user-form-btn'>
                <IntlMessages id='common.login' />
              </Button>
            </Form>

            <div className='user-card-footer-action'>
              <span>
                <IntlMessages id='common.orLoginWith' />
              </span>
              <div className='user-social-link'>
                <Button>
                  <FaFacebookF />
                </Button>
                <Button>
                  <GithubOutlined />
                </Button>
                <Button>
                  <TwitterOutlined />
                </Button>
              </div>
            </div>

            <div className='user-card-footer'>
              <span>
                <IntlMessages id='common.dontHaveAccount' />
              </span>
              <span className='user-card-footer-link'>
                <IntlMessages id='common.signup' />
              </span>
            </div>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default Signin;
