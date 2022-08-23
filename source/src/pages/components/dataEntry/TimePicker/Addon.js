import React from 'react';
import {Button, Space, TimePicker} from 'antd';

class Addon extends React.Component {
  state = {open: false};

  handleOpenChange = (open) => {
    this.setState({open});
  };

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <Space>
        <TimePicker
          open={this.state.open}
          onOpenChange={this.handleOpenChange}
          addon={() => (
            <Button size='small' type='primary' onClick={this.handleClose}>
              Ok
            </Button>
          )}
        />
      </Space>
    );
  }
}

export default Addon;
