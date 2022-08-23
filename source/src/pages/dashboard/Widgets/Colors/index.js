import React, {useState} from 'react';
import ColorItem from './ColorItem';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {List} from 'antd';
import './index.style.less';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const Colors = ({data}) => {
  const [colorsList, handleList] = useState(data);

  const handleChange = (e, color) => {
    color.isChecked = e.target.checked;
    const list = colorsList.map((item) =>
      item.id === color.id ? color : item,
    );
    handleList(list);
  };
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.colors']}>
      <AppScrollbar className='colors-scrollbar'>
        <List
          dataSource={data}
          renderItem={(item) => {
            return (
              <ColorItem
                key={item.id}
                item={item}
                handleChange={handleChange}
              />
            );
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Colors;

Colors.defaultProps = {
  data: [],
};

Colors.propTypes = {
  data: PropTypes.array,
};
