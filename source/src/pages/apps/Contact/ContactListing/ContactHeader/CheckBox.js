import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Checkbox} from 'antd';

const CheckBox = ({checkedContacts, setCheckedContacts}) => {
  const contactList = useSelector(({contactApp}) => contactApp.contactList);

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const contactIds = contactList.map((contact) => contact.id);
      setCheckedContacts(contactIds);
    } else {
      setCheckedContacts([]);
    }
  };

  return (
    <div className='contact-header-checkbox-view'>
      <Checkbox
        color='primary'
        indeterminate={
          checkedContacts.length > 0 &&
          checkedContacts.length < contactList.length
        }
        checked={
          contactList.length > 0 &&
          checkedContacts.length === contactList.length
        }
        onChange={onHandleMasterCheckbox}
      />
    </div>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
};
