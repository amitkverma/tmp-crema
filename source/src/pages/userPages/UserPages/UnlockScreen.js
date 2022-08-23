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

const UnlockScreen = () => {
  const {messages} = useIntl();
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Unlock Screen' />
        <div className='user-container' key='a'>
          <Card className='user-card user-card-lg-space'>
            <div className='user-card-header'>
              <div className='user-card-logo'>
                <img
                  src={'/assets/images/logo.png'}
                  alt='crema'
                  title='crema'
                />
              </div>
              <h3>
                <IntlMessages id='common.unlockScreen' />
              </h3>
            </div>

            <div className='user-card-para'>
              <p className='mb-0'>
                <IntlMessages id='common.unlockScreenTextOne' />
              </p>
              <p className='mb-0'>
                <IntlMessages id='common.unlockScreenTextTwo' />
              </p>
            </div>

            <Form
              className='user-form mb-0'
              name='basic'
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <Form.Item
                name='password'
                className='form-field-lg'
                rules={[
                  {required: true, message: 'Please input your Password!'},
                ]}>
                <Input
                  type='password'
                  placeholder={messages['common.password']}
                />
              </Form.Item>

              <Button
                type='primary'
                className='user-form-btn'
                htmlType='submit'>
                <IntlMessages id='common.unlockItForMe' />
              </Button>
            </Form>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default UnlockScreen;
