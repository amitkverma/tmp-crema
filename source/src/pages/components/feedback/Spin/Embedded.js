import React from 'react';
import {Alert, Space, Spin, Switch} from 'antd';

class Embedded extends React.Component {
  state = {loading: false};
  toggle = (value) => {
    this.setState({loading: value});
  };

  render() {
    return (
      <Space direction='vertical'>
        <Spin spinning={this.state.loading}>
          <Alert
            message='Alert message title'
            description='Further details about the context of this alert.'
            type='info'
          />
        </Spin>
        <div style={{marginTop: 16}}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </Space>
    );
  }
}

export default Embedded;
