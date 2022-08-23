import React from 'react';
import SocialMediaGraph from './SocialMediaGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';
import {useIntl} from 'react-intl';

const SocialMediaAdvertise = (props) => {
  const {socialMediaData} = props;
  const {messages} = useIntl();

  return (
    <AppCard heightFull title={messages['dashboard.socialMedia']}>
      <SocialMediaGraph socialMediaData={socialMediaData} />
      <div className='social-media-advertise'>
        {socialMediaData.map((item) => {
          return (
            <div className='social-media-advertise-item' key={item.id}>
              <h4 style={{color: item.color}}>{item.revenue}</h4>
              <p className='social-media-advertise-name'>{item.name}</p>
              <span
                className='social-media-advertise-value'
                style={{color: item.changeColor}}>
                {item.change}
              </span>
            </div>
          );
        })}
      </div>
    </AppCard>
  );
};

export default SocialMediaAdvertise;

SocialMediaAdvertise.defaultProps = {
  socialMediaData: [],
};

SocialMediaAdvertise.propTypes = {
  socialMediaData: PropTypes.array,
};
