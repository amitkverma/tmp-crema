import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {DatePicker, Form} from 'antd';

const DatePickers = (props) => {
  const {scheduleDate, setScheduleDate} = props;

  return (
    <Form.Item className='form-field todo-detail-datepicker'>
      <DatePicker
        defaultValue={moment(scheduleDate, 'YYYY-MM-DD')}
        onChange={(value) =>
          setScheduleDate(moment(value).format('YYYY/MM/DD'))
        }
      />
    </Form.Item>
  );
};

export default DatePickers;

DatePickers.propTypes = {
  scheduleDate: PropTypes.any,
  setScheduleDate: PropTypes.func,
};
