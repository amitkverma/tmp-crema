import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Button, Card, Col, Form, Input} from 'antd';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {useIntl} from 'react-intl';
import '../index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/user/forgot-password.svg';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const ForgetPassword = () => {
  const {messages} = useIntl();

  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Forgot Password' />
        <div className='user-container' key='a'>
          <Card className='user-card user-card-lg user-card-for-password'>
            <AppRowContainer>
              <Col xs={24} lg={12}>
                <div className='user-styled-img'>
                  <Logo />
                </div>
              </Col>

              <Col xs={24} lg={12}>
                <div className='user-styled-for-password'>
                  <div className='user-card-header'>
                    <h3>
                      <IntlMessages id='common.forgetPassword' />
                    </h3>
                  </div>

                  <div className='user-card-para'>
                    <p className='mb-0'>
                      <IntlMessages id='common.forgetPasswordTextOne' />
                    </p>
                    <p className='mb-0'>
                      <IntlMessages id='common.forgetPasswordTextTwo' />
                    </p>
                  </div>

                  <Form
                    className='user-form mb-0'
                    name='basic'
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item
                      name='email'
                      className='form-field-lg'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Email Address!',
                        },
                      ]}>
                      <Input placeholder={messages['common.emailAddress']} />
                    </Form.Item>

                    <Button
                      type='primary'
                      htmlType='submit'
                      className='user-form-btn'>
                      <IntlMessages id='common.sendNewPassword' />
                    </Button>
                  </Form>
                </div>
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default ForgetPassword;
