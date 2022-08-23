import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import {RightOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import './index.style.less';

const Subscribe = () => {
  const {messages} = useIntl();

  return (
    <AppCard
      heightFull
      className='sub-card'
      title={messages['dashboard.subscribe']}>
      <p className='sub-text'>
        <IntlMessages id='dashboard.subscribeContent' />
      </p>
      <Form>
        <div className='sub-form-field-row'>
          <div className='form-field'>
            <Input
              className='sub-input'
              placeholder={messages['common.email']}
              name='email'
            />
          </div>
          <div className='form-btn-field'>
            <Button type='primary' className='sub-btn'>
              <RightOutlined />
            </Button>
          </div>
        </div>
      </Form>
    </AppCard>
  );
};

export default Subscribe;
