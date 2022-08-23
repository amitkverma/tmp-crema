import React, {Component} from 'react';
import {Space, DatePicker} from 'antd';

class CustomizedRangePicker extends Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = (value) => {
    this.onChange('startValue', value);
  };

  onEndChange = (value) => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({endOpen: true});
    }
  };

  handleEndOpenChange = (open) => {
    this.setState({endOpen: open});
  };

  render() {
    const {startValue, endValue, endOpen} = this.state;
    return (
      <Space>
        <DatePicker
          className='gx-mb-3 gx-w-100'
          disabledDate={this.disabledStartDate}
          showTime
          format='YYYY-MM-DD HH:mm:ss'
          value={startValue}
          placeholder='Start'
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          className='gx-w-100'
          disabledDate={this.disabledEndDate}
          showTime
          format='YYYY-MM-DD HH:mm:ss'
          value={endValue}
          placeholder='End'
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </Space>
    );
  }
}

export default CustomizedRangePicker;
