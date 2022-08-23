import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import AppCard from '../../../../@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button, List} from 'antd';
import './index.style.less';

import {CloseOutlined} from '@ant-design/icons';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';

const Categories = (props) => {
  const {messages} = useIntl();
  const data = props.data;

  const [categoryList, handleList] = useState(data);

  const handleChange = (e, category) => {
    category.isChecked = e.target.checked;
    const list = categoryList.map((item) =>
      item.id === category.id ? category : item,
    );
    handleList(list);
  };

  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.categories']}
      extra={
        <Button className='close-btn'>
          <CloseOutlined />
        </Button>
      }>
      <AppScrollbar className='categories-scrollbar'>
        <List
          className='categories-list-half'
          dataSource={categoryList}
          renderItem={(item, index) => (
            <CategoryItem
              id={index}
              key={index}
              item={item}
              handleChange={handleChange}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Categories;

Categories.defaultProps = {
  categoryList: [],
};

Categories.propTypes = {
  categoryList: PropTypes.array,
  data: PropTypes.array,
};
