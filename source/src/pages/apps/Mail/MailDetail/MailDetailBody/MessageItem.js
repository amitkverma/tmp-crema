import React, {useState} from 'react';
import {Avatar, Popover, Tooltip} from 'antd';
import AppIconButton from '../../../../../@crema/core/AppIconButton';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {HiOutlineReply} from 'react-icons/hi';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import {RiShareForwardLine} from 'react-icons/ri';
import renderHTML from 'react-render-html';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReplyMail from './ReplyMail';
import {BiChevronDown} from 'react-icons/bi';
import {getStringFromHtml} from '../../../../../@crema/utility/helper/StringHelper';

const MessageItem = ({
  message,
  mailLength,
  index,
  onSubmitMail,
  onChangeStarred,
}) => {
  const [isExpanded, setExpanded] = useState(mailLength === index + 1);

  const [{isReply, isForward}, onSelectMethod] = useState({
    isReply: false,
    isForward: false,
  });

  const onGetMailDate = (date) => {
    return moment(date).format('lll');
  };

  const mailDescription = () => {
    return (
      <div className='mail-description-popover-body'>
        <div className='mail-description-item'>
          <span className='mail-description-name'>from:</span>
          <span>
            <strong>{message.sender.name}</strong>
            <span style={{fontSize: 12}}> {`<${message.sender.email}>`}</span>
          </span>
        </div>
        <div className='mail-description-item'>
          <span className='mail-description-name'>reply-to:</span>
          <span>{message.to[0].email}</span>
        </div>
        <div className='mail-description-item'>
          <span className='mail-description-name'>date:</span>
          <span>{onGetMailDate()}</span>
        </div>
        <div className='mail-description-item'>
          <span className='mail-description-name'>subject:</span>
          <span>how you get new orders easily</span>
        </div>
      </div>
    );
  };

  const getHeaderDescription = () => {
    if (isExpanded) {
      return (
        <Tooltip title={message.to.map((user) => user.name)} placement='bottom'>
          <Popover
            placement='bottomLeft'
            content={mailDescription}
            trigger='click'>
            <span
              className='pointer'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}>
              {`to ${message.to.map((user) => user.email).toString()}`}
              <span style={{marginTop: 5, fontSize: 18}}>
                <BiChevronDown />
              </span>
            </span>
          </Popover>
        </Tooltip>
      );
    } else {
      return (
        <span
          className='mail-detail-user-description text-truncate'
          style={{display: 'block'}}>
          {getStringFromHtml(message.description)}
        </span>
      );
    }
  };

  return (
    <div className='mail-detail-message-content'>
      <div
        className='mail-detail-body-header'
        onClick={() => {
          if (mailLength !== index + 1) setExpanded(!isExpanded);
        }}>
        <div className='mail-detail-user'>
          <Avatar className='mail-detail-avatar'>
            {message.sender.name.charAt(0)}
          </Avatar>
          <div className='mail-detail-user-content'>
            <div className='ant-row ant-row-middle'>
              <h3 className='mb-0'>{message.sender.name}</h3>
              {isExpanded ? (
                <span className='mail-detail-breakAll'>{`<${message.sender.email}>`}</span>
              ) : null}
            </div>
            <div>{getHeaderDescription()}</div>
          </div>
        </div>

        <div className='mail-detail-body-header-action'>
          <span className='mail-detail-date'>
            {onGetMailDate(message.sentOn)}
          </span>
          <div className='mail-detail-subject-header-action'>
            {isExpanded ? (
              <AppIconButton
                title={<IntlMessages id='common.reply' />}
                icon={<HiOutlineReply />}
                onClick={() =>
                  onSelectMethod({isReply: true, isForward: false})
                }
              />
            ) : null}

            <AppsStarredIcon
              title={<IntlMessages id='common.starred' />}
              item={message}
              onChange={(status, item, e) => {
                e.stopPropagation();
                onChangeStarred(item, status);
              }}
            />

            {isExpanded ? (
              <AppIconButton
                title={<IntlMessages id='common.forward' />}
                icon={<RiShareForwardLine />}
                onClick={() =>
                  onSelectMethod({isReply: false, isForward: true})
                }
              />
            ) : null}
          </div>
        </div>
      </div>

      {isExpanded ? (
        <div className='mail-detail-description'>
          {renderHTML(message.description)}
        </div>
      ) : null}
      {isReply || isForward ? (
        <ReplyMail
          isForward={isForward}
          message={message}
          index={index}
          onDeleteDraft={() =>
            onSelectMethod({
              isReply: false,
              isForward: false,
            })
          }
          onSubmitMail={(message, index) => {
            onSelectMethod({
              isReply: false,
              isForward: false,
            });
            onSubmitMail(message, index);
          }}
        />
      ) : null}
    </div>
  );
};

export default React.memo(MessageItem);

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  mailLength: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onSubmitMail: PropTypes.func.isRequired,
  onChangeStarred: PropTypes.func.isRequired,
};
