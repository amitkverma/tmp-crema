import React from 'react';
import PropTypes from 'prop-types';
import {Card, Col} from 'antd';
import AppScrollbar from '../../../@crema/core/AppScrollbar';
import './index.style.less';

const KbItem = ({data}) => {
  return (
    <Col xs={24} sm={12} lg={8}>
      <Card className='know-kb-card'>
        <h5>{data.ques}</h5>
        <AppScrollbar className='know-kb-scrollbar'>
          <p className='mb-0'>{data.ans}</p>
        </AppScrollbar>
        <div className='know-badge-group'>
          {data.tags.map((tag, index) => {
            return (
              <span className='know-badge' key={index}>
                {tag}
              </span>
            );
          })}
        </div>
      </Card>
    </Col>
  );
};

export default KbItem;

KbItem.propTypes = {
  data: PropTypes.object.isRequired,
};
