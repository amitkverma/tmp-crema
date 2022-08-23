import React, {useState} from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Select} from 'antd';

const SelectTasksDropdown = ({onSelectTasks}) => {
  const [selectedItems, setSelectedItems] = useState(0);

  const onChangeSelectValue = (value) => {
    setSelectedItems(value);
    onSelectTasks(value);
  };

  const {messages} = useIntl();

  return (
    <span className='todo-select-task-dropdown-view'>
      <Select
        value={selectedItems}
        onChange={onChangeSelectValue}
        defaultValue={messages['common.all']}
        className='todo-select-task-dropdown'>
        <Select.Option value={0}>{messages['common.all']}</Select.Option>
        <Select.Option value={1}>{messages['common.none']}</Select.Option>
        <Select.Option value={2}>{messages['common.starred']}</Select.Option>
        <Select.Option value={3}>
          {messages['common.attachments']}
        </Select.Option>
      </Select>
    </span>
  );
};

export default SelectTasksDropdown;

SelectTasksDropdown.propTypes = {
  onSelectTasks: PropTypes.func,
};
