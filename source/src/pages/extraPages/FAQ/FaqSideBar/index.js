import React from 'react';
import {
  DollarOutlined,
  FileTextOutlined,
  FrownOutlined,
  SettingOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import SideBarItem from './SideBarItem';
import {Card, List} from 'antd';
import '../index.style.less';

const faqFolderList = [
  {id: 101, name: <IntlMessages id='faq.general' />, icon: <SyncOutlined />},
  {
    id: 102,
    name: <IntlMessages id='knowledge.installation' />,
    icon: <SettingOutlined />,
  },
  {id: 103, name: <IntlMessages id='faq.pricing' />, icon: <DollarOutlined />},
  {
    id: 104,
    name: <IntlMessages id='faq.licenseTypes' />,
    icon: <FileTextOutlined />,
  },
  {
    id: 105,
    name: <IntlMessages id='faq.support' />,
    icon: <FrownOutlined />,
  },
];

const FaqSideBar = ({onGetFaqData, selectionId}) => {
  return (
    <Card className='faq-sidebar-card'>
      <h3>
        <IntlMessages id='faq.queries' />
      </h3>
      <List aria-label='main mailbox folders' className='faq-sidebar-list'>
        {faqFolderList.map((item) => {
          return (
            <SideBarItem
              key={item.id}
              item={item}
              selectionId={selectionId}
              onGetFaqData={onGetFaqData}
            />
          );
        })}
      </List>
    </Card>
  );
};

export default FaqSideBar;

FaqSideBar.propTypes = {
  selectionId: PropTypes.number,
  onGetFaqData: PropTypes.func,
};
