import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {AppstoreOutlined, BarsOutlined} from '@ant-design/icons';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {useIntl} from 'react-intl';

const ViewSelectButtons = ({pageView, onChangePageView}) => {
  const {messages} = useIntl();
  return (
    <div className='contact-view-select'>
      <AppIconButton
        title={messages['sidebar.ecommerce.gridView']}
        className={clsx({
          active: pageView === 'grid',
        })}
        icon={<AppstoreOutlined />}
        onClick={() => onChangePageView('grid')}
      />

      <AppIconButton
        icon={<BarsOutlined />}
        title={messages['sidebar.ecommerce.listView']}
        className={clsx({
          active: pageView === 'list',
        })}
        onClick={() => onChangePageView('list')}
      />
    </div>
  );
};

export default ViewSelectButtons;

ViewSelectButtons.propTypes = {
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
