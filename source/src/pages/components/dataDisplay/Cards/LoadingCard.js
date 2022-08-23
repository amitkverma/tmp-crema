import React from 'react';
import {Skeleton, Switch, Card, Avatar, Space} from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './loadingCard.style.less';

const {Meta} = Card;

class LoadingCard extends React.Component {
  state = {
    loading: true,
  };

  onChange = (checked) => {
    this.setState({loading: !checked});
  };

  render() {
    const {loading} = this.state;

    return (
      <Space direction='vertical'>
        <Switch checked={!loading} onChange={this.onChange} />

        <Card
          className='loading-card'
          style={{width: 300, marginTop: 16}}
          loading={loading}>
          <Meta
            avatar={
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            }
            title='Card title'
            description='This is the description'
          />
        </Card>

        <Card
          className='loading-card'
          style={{width: 300, marginTop: 16}}
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}>
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              title='Card title'
              description='This is the description'
            />
          </Skeleton>
        </Card>
      </Space>
    );
  }
}

export default LoadingCard;
