import React from 'react';
import {Slider} from 'antd';
import {FrownOutlined, SmileOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import './sliderWithIcon.style.less';

class SliderWithIcon extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    const {max, min} = this.props;
    const {value} = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className='icon-wrapper'>
        <FrownOutlined className={preColorCls} />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <SmileOutlined className={nextColorCls} />
      </div>
    );
  }
}

export default SliderWithIcon;

SliderWithIcon.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
};
