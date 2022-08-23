import React from 'react';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {useDispatch, useSelector} from 'react-redux';
import {
  onUpdateReadStatus,
  onUpdateStarredStatus,
} from '../../../../../redux/actions/MailApp';
import PropTypes from 'prop-types';
import {FiMoreVertical} from 'react-icons/fi';
import {Dropdown, Menu} from 'antd';
import '../index.style.less';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const MoreOptions = (props) => {
  const {checkedMails, setCheckedMails, path} = props;

  let unReadOption;
  let readOption;
  let starredOption;
  let unStarredOption;

  const dispatch = useDispatch();

  const mailList = useSelector(({mailApp}) => mailApp.mailList);

  mailList.map((mail) => {
    if (checkedMails.includes(mail.id) && mail.isRead) {
      unReadOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isRead) {
      readOption = true;
    }
    if (checkedMails.includes(mail.id) && mail.isStarred) {
      unStarredOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isStarred) {
      starredOption = true;
    }
    return null;
  });

  const onChangeReadStatus = (statusValue) => {
    const status = !!statusValue;
    dispatch(onUpdateReadStatus(checkedMails, status));
    setCheckedMails([]);
  };

  const onChangeAllReadStatus = (statusValue) => {
    const status = !!statusValue;
    const checkedMails = mailList.map((mail) => mail.id);
    dispatch(onUpdateReadStatus(checkedMails, status));
    setCheckedMails([]);
  };

  const onChangeAllStarred = (status) => {
    const checkedMails = mailList.map((mail) => mail.id);
    dispatch(
      onUpdateStarredStatus(checkedMails, status, path[path.length - 1]),
    );
    setCheckedMails([]);
  };

  const onChangeStarredStatus = (status) => {
    dispatch(
      onUpdateStarredStatus(checkedMails, status, path[path.length - 1]),
    );
    setCheckedMails([]);
  };

  const menuViewMore = (
    <Menu>
      {readOption ? (
        <Menu.Item onClick={() => onChangeReadStatus(1)}>
          <IntlMessages id='mailApp.markAsRead' />
        </Menu.Item>
      ) : null}
      {unReadOption ? (
        <Menu.Item onClick={() => onChangeReadStatus(0)}>
          <IntlMessages id='mailApp.markAsUnread' />
        </Menu.Item>
      ) : null}
      {starredOption ? (
        <Menu.Item onClick={() => onChangeStarredStatus(1)}>
          <IntlMessages id='mailApp.markAsImportant' />
        </Menu.Item>
      ) : null}
      {unStarredOption ? (
        <Menu.Item onClick={() => onChangeStarredStatus(0)}>
          <IntlMessages id='mailApp.markAsNotImportant' />
        </Menu.Item>
      ) : null}
    </Menu>
  );

  const menuViewMoreTo = (
    <Menu>
      <Menu.Item onClick={() => onChangeAllReadStatus(1)}>
        <IntlMessages id='mailApp.markAllAsRead' />
      </Menu.Item>
      <Menu.Item onClick={() => onChangeAllReadStatus(0)}>
        <IntlMessages id='mailApp.markAllAsUnread' />
      </Menu.Item>
      <Menu.Item onClick={() => onChangeAllStarred(1)}>
        <IntlMessages id='mailApp.markAllAsImportant' />
      </Menu.Item>
      <Menu.Item onClick={() => onChangeAllStarred(0)}>
        <IntlMessages id='mailApp.markAllAsNotImportant' />
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {checkedMails.length > 0 ? (
        <Dropdown overlay={menuViewMore} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id='common.more' />}
            icon={<FiMoreVertical />}
          />
        </Dropdown>
      ) : (
        <Dropdown overlay={menuViewMoreTo} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id='common.more' />}
            icon={<FiMoreVertical />}
          />
        </Dropdown>
      )}
    </>
  );
};

export default MoreOptions;

MoreOptions.defaultProps = {
  checkedMails: [],
};

MoreOptions.propTypes = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
  path: PropTypes.any.isRequired,
};
