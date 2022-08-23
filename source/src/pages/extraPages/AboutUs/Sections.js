import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Avatar, Button, Card} from 'antd';
import './index.style.less';

const Sections = ({data}) => {
  return (
    <Card className='about-section-card'>
      <div className='about-section-thumb'>
        <Avatar
          className='about-section-avatar'
          style={{
            backgroundColor: data.avatarColor,
          }}>
          {data.icon}
        </Avatar>
      </div>

      <h2>{data.title}</h2>

      <p>{data.content}</p>

      <Button className='btn-white read-btn'>
        <IntlMessages id='dashboard.readMore' />
      </Button>
    </Card>
  );
};

export default Sections;

Sections.propTypes = {
  data: PropTypes.object.isRequired,
};
