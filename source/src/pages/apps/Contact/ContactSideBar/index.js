import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import CreateContact from '../CreateContact';
import LabelItem from './LabelItem';
import AppsSideBarFolderItem from '../../../../@crema/core/AppsSideBarFolderItem';
import AppList from '../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '../../../../@crema/core/AppSkeleton/SidebarListSkeleton';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import {Button} from 'antd';
import './index.style.less';
import {AppAnimates} from 'shared/constants/AppEnums';
import {PlusOutlined} from '@ant-design/icons';

const SideBarContent = () => {
  const labelList = useSelector(({contactApp}) => contactApp.labelList);

  const folderList = useSelector(({contactApp}) => contactApp.folderList);

  const [isAddContact, onSetIsAddContact] = useState(false);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  return (
    <>
      <div className='contact-sidebar-header'>
        <Button
          ghost
          type='primary'
          icon={<PlusOutlined style={{marginRight: 8}} />}
          onClick={handleAddContactOpen}>
          <IntlMessages id='contactApp.createContact' />
        </Button>
      </div>

      <AppScrollbar className='contact-sidebar-scrollbar'>
        <div className='contact-sidebar-content'>
          <div className='contact-sidebar-list'>
            <AppList
              animation={AppAnimates.SLIDELEFTIN}
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/contact/folder/${item.alias}`}
                />
              )}
            />
          </div>

          <h5 className='contact-sidebar-title'>
            <IntlMessages id='common.labels' />
          </h5>

          <AppList
            animation={AppAnimates.SLIDELEFTIN}
            data={labelList}
            ListEmptyComponent={
              <ListEmptyResult
                loading={true}
                placeholder={<SidebarPlaceholder />}
              />
            }
            renderItem={(label) => <LabelItem key={label.id} label={label} />}
          />

          {isAddContact ? (
            <CreateContact
              isAddContact={isAddContact}
              handleAddContactClose={handleAddContactClose}
            />
          ) : null}
        </div>
      </AppScrollbar>
    </>
  );
};

export default SideBarContent;
