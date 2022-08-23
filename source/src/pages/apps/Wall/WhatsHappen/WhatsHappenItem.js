import React from 'react';
import PropTypes from 'prop-types';
import AppIconButton from '../../../../@crema/core/AppIconButton';
import {MoreOutlined} from '@ant-design/icons';

const WhatsHappenItem = ({data}) => {
  const {imgSrc, subTitle, title} = data;

  return (
    <div className='whats-happen-item item-hover'>
      <div className='whats-happen-thumb'>
        <img src={imgSrc} alt='happen img' />
      </div>
      <div className='whats-happen-item-content'>
        <p className='text-truncate whats-happen-sub-title'>{subTitle}</p>
        <h3 className='text-truncate whats-happen-title'>{title}</h3>
        <p className='text-truncate whats-happen-special-text'>
          {data.tag.map((val) => (
            <span key={val.id}>#{val.name}</span>
          ))}
        </p>
      </div>
      <div className='whats-happen-action'>
        <AppIconButton className='whats-happen-btn' icon={<MoreOutlined />} />
      </div>
    </div>
  );
};

export default WhatsHappenItem;

WhatsHappenItem.propTypes = {
  data: PropTypes.object,
};
