import React from 'react';
import {Space} from 'antd';
import {Mention} from '@ant-design/compatible';

const {toContentState} = Mention;

class Controlled extends React.Component {
  state = {
    value: toContentState('@afc163'),
  };
  handleChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  };

  componentDidMount() {
    this.mention.focus();
  }

  render() {
    return (
      <Space>
        <Mention
          ref={(ele) => (this.mention = ele)}
          suggestions={[
            'afc163',
            'benjycui',
            'yiminghe',
            'RaoHai',
            '中文',
            'にほんご',
          ]}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Space>
    );
  }
}

export default Controlled;
