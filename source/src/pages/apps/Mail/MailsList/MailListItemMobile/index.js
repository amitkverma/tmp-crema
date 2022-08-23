import React from 'react';

import moment from 'moment';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Avatar} from 'antd';
import './index.style.less';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {CheckOutlined} from '@ant-design/icons';
import {getStringFromHtml} from '../../../../../@crema/utility/helper/StringHelper';

const MailListItemMobile = (props) => {
  const {
    mail,
    checkedMails,
    onChangeCheckedMails,
    onChangeStarred,
    onViewMailDetail,
  } = props;

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
      }, ${mail.messages[messages - 1].sender.name}(${messages})`;
    }
  };

  const getDescription = () => {
    return mail.messages[messages - 1].description;
  };

  return (
    <div
      key={mail.id}
      className={clsx('mail-list-item-mobile item-hover', {
        mailRead: mail.isRead,
      })}
      onClick={() => onViewMailDetail(mail)}>
      <div
        className={clsx('mail-list-avatar-mobile-view', {
          checked: checkedMails.includes(mail.id),
        })}
        onClick={(event) => {
          event.stopPropagation();
          onChangeCheckedMails(!checkedMails.includes(mail.id), mail.id);
        }}>
        {checkedMails.includes(mail.id) ? (
          <CheckOutlined />
        ) : (
          <Avatar className='mail-list-avatar-mobile'>
            {getSenderName().charAt(0).toUpperCase()}
          </Avatar>
        )}
      </div>

      <div className='mail-list-content-mobile'>
        <div className='mail-list-main-content-mobile'>
          <p className='mail-list-title-mobile text-truncate'>
            {getSenderName()}
          </p>
          <p className='mail-list-sub-title-mobile text-truncate'>
            {mail.subject}
          </p>
          <p className='mail-description-mobile text-truncate'>
            {getStringFromHtml(getDescription())}
          </p>
        </div>

        <div className='mail-list-action-mobile'>
          <span className='mail-list-time-mobile'>
            <span className='mail-list-date text-truncate'>
              {onGetMailDate(mail.sentOn)}
            </span>
          </span>

          <span
            className='mail-list-starred-mobile'
            onClick={(event) => event.stopPropagation()}>
            <AppsStarredIcon
              item={mail}
              onChange={() => onChangeStarred(!mail.isStarred, mail)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MailListItemMobile;

MailListItemMobile.defaultProps = {
  labelList: [],
  checkedMails: [],
};

MailListItemMobile.propTypes = {
  mail: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onViewMailDetail: PropTypes.func,
  checkedMails: PropTypes.array,
  onChangeCheckedMails: PropTypes.func,
};
