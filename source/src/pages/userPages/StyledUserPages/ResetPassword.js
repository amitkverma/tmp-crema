import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import {Button, Card, Col, Form, Input} from 'antd';
import {useIntl} from 'react-intl';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import '../index.style.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/user/reset-password.svg';

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
          <Card className='user-card user-card-lg'>
            <AppRowContainer>
              <Col xs={24} md={12} className='user-styled-reset-img-col'>
                <div className='user-styled-img user-styled-img-auto'>
                  <Logo />
                </div>
              </Col>

              <Col xs={24} md={12}>
                <div className='user-card-header'>
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
                      {
                        required: true,
                        message: 'Please input your Old Password!',
                      },
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
                      {
                        required: true,
                        message: 'Please input your New Password!',
                      },
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
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default ResetPassword;
