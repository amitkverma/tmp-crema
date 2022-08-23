import React, {useState} from 'react';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {useSelector} from 'react-redux';
import {PlusOutlined} from '@ant-design/icons';
import ComposeMail from '../ComposeMail';
import ConnectionListItem from './ConnectionListItem';
import AppsSideBarFolderItem from '../../../../@crema/core/AppsSideBarFolderItem';
import LabelItem from './LabelItem';
import AppList from '../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '../../../../@crema/core/AppSkeleton/SidebarListSkeleton';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import {Button, List} from 'antd';
import './index.style.less';

const MailSidebar = () => {
  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const connectionList = useSelector(({mailApp}) => mailApp.connectionList);

  const folderList = useSelector(({mailApp}) => mailApp.folderList);

  const [isComposeMail, setComposeMail] = useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  return (
    <>
      {labelList || connectionList || folderList ? (
        <>
          <div className='mail-sidebar-header'>
            <Button
              ghost
              type='primary'
              icon={<PlusOutlined style={{marginRight: 8}} />}
              onClick={onOpenComposeMail}>
              <IntlMessages id='common.compose' />
            </Button>
          </div>

          <AppScrollbar className='mail-sidebar-scrollbar'>
            <div className='mail-sidebar-content'>
              <List
                className='mail-sidebar-list'
                component='nav'
                aria-label='main mailbox folders'>
                <AppList
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
                      path={`/apps/mail/folder/${item.alias}`}
                    />
                  )}
                />
              </List>

              <h5 className='mail-sidebar-title'>
                <IntlMessages id='common.labels' />
              </h5>
              <List
                className='mail-sidebar-list'
                component='nav'
                aria-label='main mailbox folders'>
                <AppList
                  data={labelList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder />}
                    />
                  }
                  renderItem={(label) => (
                    <LabelItem key={label.id} label={label} />
                  )}
                />
              </List>
              <h5 className='mail-sidebar-title'>
                <IntlMessages id='common.connections' />
              </h5>

              <List>
                <AppList
                  data={connectionList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder />}
                    />
                  }
                  renderItem={(connection) => {
                    return (
                      <ConnectionListItem
                        connection={connection}
                        key={connection.id}
                      />
                    );
                  }}
                />
              </List>
            </div>
          </AppScrollbar>
        </>
      ) : null}

      {isComposeMail ? (
        <ComposeMail
          isComposeMail={isComposeMail}
          onCloseComposeMail={onCloseComposeMail}
        />
      ) : null}
    </>
  );
};

export default MailSidebar;
