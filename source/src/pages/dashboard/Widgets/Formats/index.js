import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Radio} from 'antd';
import './index.style.less';

const Formats = ({data}) => {
  const {messages} = useIntl();

  return (
    <AppCard heightFull title={messages['dashboard.formats']}>
      <Radio.Group
        name='radiogroup'
        defaultValue={data[0].id}
        className='format-radio-group'>
        {data.map((item) => {
          return (
            <Radio key={item.id} value={item.name}>
              {item.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </AppCard>
  );
};

export default Formats;

Formats.defaultProps = {
  data: [],
};

Formats.propTypes = {
  data: PropTypes.array,
};
