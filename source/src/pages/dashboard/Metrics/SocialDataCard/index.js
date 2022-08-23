import React from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import './index.style.less';

import {HeartFilled, MessageOutlined} from '@ant-design/icons';

const SocialDataCard = ({data}) => {
  return (
    <AppCard className='social-data-card' heightFull>
      <div className='social-data'>
        <div className='social-data-item social-data-like'>
          <HeartFilled />
          <h3>{data.likes}</h3>
          <p className='text-truncate'>
            <IntlMessages id='common.likes' />
          </p>
        </div>

        <div className='social-data-item'>
          <MessageOutlined />
          <h3>{data.comments}</h3>
          <p className='text-truncate'>
            <IntlMessages id='common.comments' />
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default SocialDataCard;

SocialDataCard.defaultProps = {};

SocialDataCard.propTypes = {
  data: PropTypes.object.isRequired,
};
