import React, {useState} from 'react';
import {Alert, Calendar, Space} from 'antd';
import moment from 'moment';

const SelectableCalendar = () => {
  const [value, setValue] = useState(moment('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(moment('2017-01-25'));

  const onSelect = (value) => {
    setValue(value);
    setSelectedValue(value);
  };
  const onPanelChange = (value) => {
    setValue(value);
  };

  return (
    <Space direction='vertical'>
      <Alert
        message={`You selected date: ${
          selectedValue && selectedValue.format('YYYY-MM-DD')
        }`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </Space>
  );
};

export default SelectableCalendar;
