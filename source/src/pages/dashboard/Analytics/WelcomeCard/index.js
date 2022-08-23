import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '../../../../@crema/core/AppCard';
import PropTypes from 'prop-types';
import './index.style.less';

import {HiOutlineMailOpen} from 'react-icons/hi';
import {BiMessageDetail} from 'react-icons/bi';
import {CgFileDocument} from 'react-icons/cg';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const getWelcomeIcon = (iconType) => {
  switch (iconType) {
    case 'HiOutlineMailOpen':
      return <HiOutlineMailOpen color='#0A8FDC' className='icon' />;
    case 'BiMessageDetail':
      return <BiMessageDetail color='#0A8FDC' className='icon' />;
    default:
      return <CgFileDocument color='#0A8FDC' className='icon' />;
  }
};

const WelcomeCard = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard className='welcome-card'>
      <div className='welcome-card-info'>
        <div className='welcome-card-content'>
          <div className='welcome-card-header'>
            <h5>{messages['dashboard.analytics.welcome']}</h5>
            <h3>{messages['dashboard.analytics.eddieMassy']}</h3>
          </div>
          <AppScrollbar scrollToTop className='welcome-card-scroll'>
            <div className='welcome-card-container'>
              <div className='welcome-card-row'>
                {data.map((item, index) => (
                  <div className='welcome-card-col' key={'box-' + index}>
                    <div className='welcome-card-col-thumb'>
                      <span className='ant-avatar ant-avatar-circle ant-avatar-image'>
                        {getWelcomeIcon(item.icon)}
                      </span>
                    </div>
                    <div className='welcome-card-col-content'>
                      <h5 className='special-title'>{item.counts}</h5>
                      <p>{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AppScrollbar>
        </div>
        <div className='welcome-img'>
          <img alt='welcome' src={'/assets/images/dashboard/welcomImage.svg'} />
        </div>
      </div>
    </AppCard>
  );
};

export default WelcomeCard;

WelcomeCard.defaultProps = {
  data: [],
};

WelcomeCard.propTypes = {
  data: PropTypes.array,
};
