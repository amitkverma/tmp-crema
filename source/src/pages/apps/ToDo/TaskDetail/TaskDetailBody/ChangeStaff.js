import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Avatar, Form, Select} from 'antd';
import {useIntl} from 'react-intl';

const {Option} = Select;

const ChangeStaff = ({handleStaffChange, selectedStaff}) => {
  const staffList = useSelector(({todoApp}) => todoApp.staffList);

  const {messages} = useIntl();
  return (
    <Form.Item className='form-field'>
      <Select
        defaultValue={selectedStaff?.id}
        placeholder={messages['common.staff']}
        onSelect={handleStaffChange}
        style={{minWidth: 150}}>
        {staffList.map((staff) => {
          return (
            <Option value={staff.id} key={staff.id}>
              <div className='ant-row ant-row-middle'>
                {staff.image ? (
                  <Avatar className='todo-ch-staff-avatar' src={staff.image} />
                ) : (
                  <Avatar className='todo-ch-staff-avatar'>
                    {staff.name.toUpperCase()}
                  </Avatar>
                )}
                <span>{staff.name}</span>
              </div>
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default ChangeStaff;

ChangeStaff.defaultProps = {
  inputLabel: null,
  labelWidth: 0,
};

ChangeStaff.propTypes = {
  handleStaffChange: PropTypes.func,
  selectedStaff: PropTypes.object,
};
