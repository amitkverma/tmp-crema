import React from 'react';
import {Button, Card, Tooltip} from 'antd';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {BookOutlined, MoreOutlined, ShareAltOutlined} from '@ant-design/icons';

const ListItem = (props) => {
  const {user} = props;

  return (
    <Card className='user-morden-card item-hover'>
      <div className='user-morden-row'>
        <div className='user-morden-thumb'>
          <img src={user.image} alt='user' />
        </div>

        <div className='user-morden-content'>
          <div className='user-morden-header'>
            <h3>{user.name}</h3>

            <div className='user-morden-header-action'>
              <span className='user-morden-header-action-item'>
                <Tooltip
                  className='pointer'
                  title={<IntlMessages id='common.share' />}>
                  <ShareAltOutlined />
                </Tooltip>
              </span>

              <span className='user-morden-header-action-item'>
                <Tooltip
                  className='pointer'
                  title={<IntlMessages id='common.bookmark' />}>
                  <BookOutlined />
                </Tooltip>
              </span>

              <span className='user-morden-header-action-item'>
                <Tooltip
                  className='pointer'
                  title={<IntlMessages id='common.more' />}>
                  <MoreOutlined />
                </Tooltip>
              </span>
            </div>
          </div>

          <p className='user-morden-para'>{user.information}</p>

          <div className='user-morden-footer'>
            <div className='user-morden-footer-chip-view'>
              {user.skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    // className={clsx('user-morden-footer-chip', {dark :  theme.palette.type === 'dark'})}
                    className='user-morden-footer-chip'>
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className='user-morden-footer-action'>
              <Button type='primary' className='user-morden-footer-hire-btn'>
                <IntlMessages id='common.hire' />
              </Button>
              <Button
                variant='contained'
                className='user-morden-footer-remove-btn'>
                <IntlMessages id='mailApp.remove' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListItem;

ListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
