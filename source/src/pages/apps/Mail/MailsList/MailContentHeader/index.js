import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import CheckedMailActions from './CheckedMailActions';
import AppsPagination from '../../../../../@crema/core/AppsPagination';
import {Checkbox, Input} from 'antd';
import '../index.style.less';
import MoreOptions from './MoreOptions';
import {useIntl} from 'react-intl';

const MailContentHeader = (props) => {
  const {path, checkedMails, setCheckedMails, page, onChange} = props;

  const mailList = useSelector(({mailApp}) => mailApp.mailList);

  const totalMails = useSelector(({mailApp}) => mailApp.totalMails);

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const mailIds = mailList.map((mail) => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
    }
  };

  const {Search} = Input;

  const {messages} = useIntl();

  return (
    <>
      <div className='mail-content-header'>
        <Checkbox
          color='primary'
          className='mail-content-header-checkbox'
          indeterminate={
            checkedMails.length > 0 && checkedMails.length < mailList.length
          }
          checked={
            mailList.length > 0 && checkedMails.length === mailList.length
          }
          onChange={onHandleMasterCheckbox}
        />

        <Search
          className='mail-search'
          placeholder={messages['common.searchHere']}
          // value={filterText}
          // onChange={(event) => onSetFilterText(event.target.value)}
        />

        {checkedMails.length > 0 ? (
          <CheckedMailActions
            checkedMails={checkedMails}
            setCheckedMails={setCheckedMails}
          />
        ) : null}

        <MoreOptions
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          path={path}
        />
      </div>
      {mailList.length > 0 ? (
        <AppsPagination
          className='mail-content-header-pagination'
          count={totalMails}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default MailContentHeader;

MailContentHeader.defaultProps = {
  checkedMails: [],
  page: 0,
};

MailContentHeader.propTypes = {
  checkedMails: PropTypes.array,
  setCheckedMails: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  path: PropTypes.any,
};
