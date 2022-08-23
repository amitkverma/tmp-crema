import AppCard from '../../../../@crema/core/AppCard';
import React from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {List, Progress} from 'antd';
import './index.style.less';

const ClassItem = ({item}) => {
  return (
    <List.Item key={item.id} className='my-class-item item-hover'>
      <div className='my-class-thumb'>
        <img alt='' src={item.icon} />
      </div>
      <div className='my-class-content'>
        <div className='my-class-content-header'>
          <h3>{item.name}</h3>
          <span className='my-class-percent'>{item.percent}%</span>
        </div>
        <div className='my-class-progress-view'>
          <Progress
            percent={item.percent}
            strokeColor='#0A8FDC'
            trailColor='#d6d6d6'
            strokeWidth={5}
            showInfo={false}
          />
        </div>
      </div>
    </List.Item>
  );
};

const MyClass = ({classData}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['academy.myClass']}>
      <List
        dataSource={classData}
        renderItem={(data, index) => <ClassItem key={index} item={data} />}
      />
    </AppCard>
  );
};

export default MyClass;

MyClass.propTypes = {
  classData: PropTypes.array,
};

ClassItem.propTypes = {
  item: PropTypes.object,
};
