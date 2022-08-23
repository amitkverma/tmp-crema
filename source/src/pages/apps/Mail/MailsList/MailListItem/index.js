import React from 'react';

import moment from 'moment';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Avatar, Checkbox, Tooltip} from 'antd';
import {PaperClipOutlined} from '@ant-design/icons';
import '../index.style.less';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {BiArchiveIn} from 'react-icons/bi';
import {AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';
import {
  onUpdateMailFolders,
  onUpdateSelectedMail,
} from '../../../../../redux/actions';
import {useDispatch} from 'react-redux';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {MdLabelOutline} from 'react-icons/md';
import {getStringFromHtml} from '../../../../../@crema/utility/helper/StringHelper';

const MailListItem = (props) => {
  const {
    mail,
    checkedMails,
    onChangeCheckedMails,
    onChangeStarred,
    onViewMailDetail,
  } = props;

  const dispatch = useDispatch();
  const messages = mail.messages.length;

  const onGetMailDate = () => {
    const date = mail.messages[messages - 1].sentOn;
    if (
      moment(date, 'ddd, MMM DD, YYYY').format() ===
      moment('ddd, MMM DD, YYYY').format()
    ) {
      return moment(date).format('LT');
    } else {
      return date.split(',')[1];
    }
  };

  const getSenderName = () => {
    if (messages === 1) {
      return mail.messages[0].sender.name;
    } else if (messages === 2) {
      return `${mail.messages[0].sender.name}, ${mail.messages[1].sender.name}(2)`;
    } else {
      return `${mail.messages[0].sender.name}, ${
        mail.messages[messages - 2].sender.name
      }, ${mail.messages[messages - 1].sender.name}(${messages}})`;
    }
  };

  const getDescription = () => {
    return mail.messages[messages - 1].description;
  };

  const onChangeMailFolder = (type) => {
    mail.folderValue = type;
    dispatch(onUpdateMailFolders([mail.id], type));
  };

  const onChangeReadStatus = () => {
    mail.isRead = !mail.isRead;
    dispatch(onUpdateSelectedMail(mail));
  };
  return (
    <div
      key={mail.id}
      className={clsx('mail-list-item item-hover', {mailRead: mail.isRead})}
      onClick={() => onViewMailDetail(mail)}>
      <div className='mail-list-content'>
        <span
          className='mail-list-checkbox'
          onClick={(event) => event.stopPropagation()}>
          <Checkbox
            checked={checkedMails.includes(mail.id)}
            onChange={(event) => onChangeCheckedMails(event, mail.id)}
            color='primary'
          />
        </span>
        <span
          className='mail-list-starred'
          onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon
            item={mail}
            onChange={() => onChangeStarred(!mail.isStarred, mail)}
          />
        </span>
        <Avatar className='mail-list-avatar'>
          {getSenderName().charAt(0).toUpperCase()}
        </Avatar>
        <p className='mail-list-title text-truncate'>{getSenderName()}</p>
        <span className='mail-list-time'>
          {mail.hasAttachments ? <PaperClipOutlined /> : null}
          <span className='mail-list-date text-truncate'>
            {onGetMailDate(mail.sentOn)}
          </span>
        </span>
      </div>

      <div className='mail-list-action'>
        <div className='mail-list-sub'>
          <p className='mail-list-sub-title'>{mail.subject}</p>
          <p className='mail-description text-truncate'>
            {getStringFromHtml(getDescription())}
          </p>
        </div>

        {mail.label ? (
          <span className='mail-tag-view'>
            <Tooltip title={mail.label.name} placement='top'>
              <span className='mail-tag' style={{color: mail.label.color}}>
                <MdLabelOutline />
              </span>
            </Tooltip>
          </span>
        ) : null}

        <span className='mail-list-time'>
          {/*{mail.hasAttachments ? <PaperClipOutlined /> : null}*/}
          <span className='mail-list-date text-truncate'>
            {onGetMailDate()}
          </span>
        </span>
        <div className='mail-list-btn-action'>
          <AppIconButton
            title={<IntlMessages id='common.archive' />}
            icon={<BiArchiveIn />}
            onClick={() => onChangeMailFolder(127)}
          />

          <AppIconButton
            title={<IntlMessages id='common.trash' />}
            icon={<AiOutlineDelete />}
            onClick={() => onChangeMailFolder(126)}
          />

          <AppIconButton
            title={
              mail.isRead ? (
                <IntlMessages id='mailApp.markAsUnread' />
              ) : (
                <IntlMessages id='mailApp.markAsRead' />
              )
            }
            icon={mail.isRead ? <FiMail /> : <HiOutlineMailOpen />}
            onClick={onChangeReadStatus}
          />

          <AppIconButton
            title={<IntlMessages id='common.reportSpam' />}
            icon={<AiOutlineInfoCircle />}
            onClick={() => onChangeMailFolder(125)}
          />
        </div>
      </div>
    </div>
  );
};

export default MailListItem;

MailListItem.defaultProps = {
  labelList: [],
  checkedMails: [],
};

MailListItem.propTypes = {
  mail: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedMails: PropTypes.array,
  onChangeCheckedMails: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onViewMailDetail: PropTypes.func,
};
