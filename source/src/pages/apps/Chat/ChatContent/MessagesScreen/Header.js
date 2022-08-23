import React, {useState} from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import ConfirmationModal from '../../../../../@crema/core/AppConfirmationModal';
import {MoreOutlined} from '@ant-design/icons';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {Dropdown, Menu} from 'antd';
import UserInfo from '../../ChatSideBar/UserInfo';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import {MdOutlinePhone} from 'react-icons/md';
import {BiVideo} from 'react-icons/bi';

const Header = (props) => {
  const {
    deleteConversation,
    selectedUser,
    onChangeStarred,
    clearChatHistory,
    isChecked,
  } = props;
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const onDeleteConversation = () => {
    deleteConversation();
    toggleDeleteModal();
  };

  const menuLabel = (
    <Menu>
      <Menu.Item onClick={toggleDeleteModal}>
        <IntlMessages id='chatApp.deleteConversation' />
      </Menu.Item>
      <Menu.Item onClick={clearChatHistory}>
        <IntlMessages id='chatApp.clearChat' />
      </Menu.Item>
      <Menu.Item>
        <IntlMessages id='chatApp.hide' />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='chat-header'>
      <UserInfo user={selectedUser} showStatus={true} />
      <div className='chat-header-action'>
        <AppIconButton
          title={<IntlMessages id='common.call' />}
          icon={<MdOutlinePhone />}
        />

        <AppIconButton
          title={<IntlMessages id='common.videoCall' />}
          icon={<BiVideo />}
        />

        <AppsStarredIcon
          item={{isStarred: isChecked}}
          onChange={onChangeStarred}
        />

        <Dropdown overlay={menuLabel} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id='common.more' />}
            icon={<MoreOutlined />}
          />
        </Dropdown>
      </div>

      {isDeleteModalOpen ? (
        <ConfirmationModal
          open={isDeleteModalOpen}
          onDeny={setDeleteModalOpen}
          onConfirm={onDeleteConversation}
          modalTitle={<IntlMessages id='chatApp.deleteContent' />}
        />
      ) : null}
    </div>
  );
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  deleteConversation: PropTypes.func,
  onChangeStarred: PropTypes.func,
  clearChatHistory: PropTypes.func,
  isChecked: PropTypes.bool,
};
